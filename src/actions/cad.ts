/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import {
  assembly,
  cad_drawing,
  classification,
  classification_type,
  feature,
  material_category,
  measurement_type,
} from '@prisma/client'
import {
  create_cad_service,
  get_cad,
  get_cads,
  get_full_cad_details,
} from '~/services/cads-service'
import { auth } from '~/auth'
import prisma from '~/lib/primsa'
import { randomUUID } from 'crypto'
import { cookies } from 'next/headers'
import { inDevEnvironment } from '~/lib/utils'
import { Material, Measurement, ServiceResponse } from '~/types/global'
import { extractUnitFromSize, parseFloatFromSize } from '~/lib/cad-utils'

const db = prisma

export async function create_cad(data: {
  name: string
  file_path: string
  file_type: string
}): Promise<ServiceResponse<cad_drawing>> {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return {
        success: false,
        error: 'Unauthorized',
        data: null,
      }
    }
    const cad = await create_cad_service({
      name: data.name,
      file_path: data.file_path,
      user_id: session.user.id,
      file_type: data.file_type,
    })
    return {
      success: true,
      error: null,
      data: cad,
    }
  } catch (error) {
    console.error('Error creating CAD:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create CAD',
      data: null,
    }
  }
}

export async function get_cards(): Promise<ServiceResponse<cad_drawing[]>> {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return {
        success: false,
        error: 'Unauthorized',
        data: null,
      }
    }
    const cards = await get_cads(session.user.id)
    return {
      success: true,
      error: null,
      data: cards,
    }
  } catch (error) {
    console.error('Error fetching CADs:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch CADs',
      data: null,
    }
  }
}

export async function get_card(): Promise<ServiceResponse<cad_drawing>> {
  const id = (await get_current_cad()) as string
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        error: 'Unauthorized',
        data: null,
      }
    }
    const card = await get_cad(id)
    return {
      success: true,
      error: null,
      data: card,
    }
  } catch (error) {
    console.error('Error fetching CAD:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch CAD',
      data: null,
    }
  }
}

export async function set_current_cad(cad_id: string) {
  const cookie = await cookies()
  cookie.set('current_cad', cad_id, {
    httpOnly: true,
    secure: !inDevEnvironment,
    maxAge: 60 * 60 * 24,
    path: '/',
  })
  return cad_id
}

export async function get_current_cad() {
  const cookie = await cookies()
  const current_cad = cookie.get('current_cad')
  return current_cad?.value
}

export async function delete_current_cad() {
  const cookie = await cookies()
  cookie.delete('current_cad')
  return null
}

export async function get_cad_details() {
  const id = (await get_current_cad()) as string
  if (!id) {
    return {
      success: false,
      error: 'No CAD selected',
      data: null,
    }
  }

  const session = await auth()
  if (!session?.user?.id) {
    return {
      success: false,
      error: 'Unauthorized',
      data: null,
    }
  }

  try {
    const cad = await get_full_cad_details(id)
    if (!cad) {
      return {
        success: false,
        error: 'CAD not found',
        data: null,
      }
    }

    if (!cad.document_info) {
      const baseUrl = process.env.BASE_URL
        ? `${process.env.BASE_URL}`
        : 'http://localhost:3000'
      const res = await fetch(`${baseUrl}/api/ai/analysis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          file_url: cad.file_path,
          file_type: cad.file_type,
        }),
      })

      if (!res.ok) {
        return {
          success: false,
          error: 'Failed to analyze CAD',
          data: null,
        }
      }
      const analysis = await res.json()
      const data = analysis.analysis

      await db.$transaction(async (tx) => {
        const existing_drawing = await prisma.document_info.findFirst({
          where: { drawing_id: cad.id },
        })
        if (existing_drawing) {
          await tx.document_info.upsert({
            where: { drawing_id: cad.id },
            update: {
              ...data.document_info,
            },
            create: {
              drawing_id: cad.id,
              ...data.document_info,
            },
          })
        } else {
          await tx.document_info.create({
            data: {
              drawing_id: cad.id,
              ...data.document_info,
            },
          })
        }
        const measurementPromises = []

        if (data.measurements && data.measurements.length > 0) {
          if (data.measurements.structural_elements?.length) {
            const structuralElementPromises =
              data.measurements.structural_elements.map(
                (element: Measurement) =>
                  tx.measurement.create({
                    data: {
                      drawing_id: cad.id,
                      measurement_type: measurement_type.STRUCTURAL_ELEMENT,
                      category: 'structural_elements',
                      name: element.name,
                      size: element.size,
                      value: parseFloatFromSize(element.size),
                      unit: extractUnitFromSize(element.size),
                    },
                  })
              )
            measurementPromises.push(...structuralElementPromises)
          }
        }

        if (data.measurements.rooms?.length) {
          const roomPromises = data.measurements.rooms.map(
            (room: Measurement) =>
              tx.measurement.create({
                data: {
                  drawing_id: cad.id,
                  measurement_type: measurement_type.ROOM,
                  category: 'rooms',
                  name: room.name,
                  size: room.size,
                  value: parseFloatFromSize(room.size),
                  unit: extractUnitFromSize(room.size),
                },
              })
          )
          measurementPromises.push(...roomPromises)
        }

        if (data.measurements.components?.length) {
          const componentPromises = data.measurements.components.map(
            (component: Measurement) =>
              tx.measurement.create({
                data: {
                  drawing_id: cad.id,
                  measurement_type: measurement_type.COMPONENT,
                  category: 'components',
                  name: component.name,
                  size: component.size,
                  value: parseFloatFromSize(component.size),
                  unit: extractUnitFromSize(component.size),
                },
              })
          )
          measurementPromises.push(...componentPromises)
        }

        if (data.measurements.spacings?.length) {
          const spacingPromises = data.measurements.spacings.map(
            (spacing: Measurement) =>
              tx.measurement.create({
                data: {
                  drawing_id: cad.id,
                  measurement_type: measurement_type.SPACING,
                  category: 'spacings',
                  name: spacing.name,
                  size: spacing.size,
                  value: parseFloatFromSize(spacing.size),
                  unit: extractUnitFromSize(spacing.size),
                },
              })
          )
          measurementPromises.push(...spacingPromises)
        }
        if (data.measurements.thicknesses?.length) {
          const thicknessPromises = data.measurements.thicknesses.map(
            (thickness: Measurement) =>
              tx.measurement.create({
                data: {
                  drawing_id: cad.id,
                  measurement_type: measurement_type.THICKNESS,
                  category: 'thicknesses',
                  name: thickness.name,
                  size: thickness.size,
                  value: parseFloatFromSize(thickness.size),
                  unit: extractUnitFromSize(thickness.size),
                },
              })
          )
          measurementPromises.push(...thicknessPromises)
        }
        if (data.measurements.total_thicknesses?.length) {
          const totalThicknessPromises =
            data.measurements.total_thicknesses.map(
              (totalThickness: Measurement) =>
                tx.measurement.create({
                  data: {
                    drawing_id: cad.id,
                    measurement_type: measurement_type.TOTAL_THICKNESS,
                    category: 'total_thicknesses',
                    name: totalThickness.name,
                    size: totalThickness.size,
                    value: parseFloatFromSize(totalThickness.size),
                    unit: extractUnitFromSize(totalThickness.size),
                  },
                })
            )
          measurementPromises.push(...totalThicknessPromises)
        }
        await Promise.all(measurementPromises)

        const materialPromises: Promise<any>[] = []

        const processMaterialCategory = (
          category: string,
          items: Material[]
        ) => {
          if (!items?.length) return

          const promises = items.map(async (item: Material) => {
            const material = await tx.material.upsert({
              where: {
                id:
                  (await getMaterialIdByNameAndSpec(
                    item.name,
                    item.specification
                  )) || randomUUID(),
              },
              update: {
                specification: item.specification,
                category: category.toLocaleUpperCase() as material_category,
              },
              create: {
                name: item.name,
                specification: item.specification,
                category: category.toLocaleUpperCase() as material_category,
                unit_price: 0,
                currency: 'USD',
              },
            })
            return tx.material_needs.create({
              data: {
                drawing_id: cad.id,
                material_id: material.id,
                quantity: 1,
                unit: 'unit',
              },
            })
          })

          materialPromises.push(...promises)
        }

        processMaterialCategory('structural', data.materials.structural)
        processMaterialCategory('insulation', data.materials.insulation)
        processMaterialCategory(
          'fire_protection',
          data.materials.fire_protection
        )
        processMaterialCategory('membrane', data.materials.membranes)
        processMaterialCategory('fastener', data.materials.fasteners)
        processMaterialCategory('sheathing', data.materials.sheathing)
        processMaterialCategory(
          'surface_material',
          data.materials.surface_materials
        )
        await Promise.all(materialPromises)

        const classificationPromises: any[] = []
        const processClassificationCategory = (
          category: string,
          items: classification[]
        ) => {
          if (!items?.length) return

          const promises = items.map((item) =>
            tx.classification.create({
              data: {
                drawing_id: cad.id,
                category: category.toUpperCase() as classification_type,
                name: item.name,
                specification: item.specification,
              },
            })
          )

          classificationPromises.push(...promises)
        }

        processClassificationCategory(
          'fire_rating',
          data.classifications.fire_ratings
        )
        processClassificationCategory(
          'environmental',
          data.classifications.environmental
        )
        processClassificationCategory(
          'standards_compliance',
          data.classifications.standards_compliance
        )
        await Promise.all(classificationPromises)

        if (data.features?.length) {
          const featurePromises = data.features.map((feature: feature) =>
            tx.feature.create({
              data: {
                drawing_id: cad.id,
                name: feature.name,
                description: feature.description,
              },
            })
          )

          await Promise.all(featurePromises)
        }

        if (data.assemblies?.length) {
          const assemblyPromises = data.assemblies.map((assembly: assembly) =>
            tx.assembly.create({
              data: {
                drawing_id: cad.id,
                name: assembly.name,
                description: assembly.description || '',
              },
            })
          )

          await Promise.all(assemblyPromises)
        }

        if (data.others?.length) {
          const othersPromises = data.others.map((other: any) =>
            tx.other.create({
              data: {
                drawing_id: cad.id,
                category: other.category,
                name: other.name,
                value: other.value,
                description: other.description,
                size: other.size,
                dimensions: other.dimensions,
                unit: other.unit,
                quantity: other.quantity,
                x_coordinate: other.x_coordinate,
                y_coordinate: other.y_coordinate,
                specification: other.specification,
              },
            })
          )
          await Promise.all(othersPromises)
        }

        return {
          success: true,
          error: null,
          data: await tx.cad_drawing.findUnique({
            where: { id: cad.id },
            include: {
              document_info: true,
              measurements: true,
              materials: {
                include: {
                  material: true,
                },
              },
              classifications: true,
              features: true,
              assemblies: true,
              other: true,
            },
          }),
        }
      })
    }

    const newcad = await get_full_cad_details(id)
    return {
      success: true,
      error: null,
      data: newcad,
    }
  } catch (error) {
    console.error('Error fetching CAD details:', error)
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'Failed to fetch CAD details',
      data: null,
    }
  }
}

export async function getMaterialIdByNameAndSpec(
  name: string,
  specification: string
): Promise<string | null> {
  const material = await db.material.findFirst({
    where: {
      name,
      specification,
    },
  })
  return material?.id || null
}
