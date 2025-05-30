import { cad_drawing } from '@prisma/client'
import prisma from '~/lib/primsa'
const db = prisma

export async function get_cads(user_id: string) {
  return db.cad_drawing.findMany({
    where: { user_id },
    orderBy: { uploaded_at: 'desc' },
  })
}

export async function get_cad(id: string) {
  return db.cad_drawing.findUnique({
    where: { id },
  })
}

export async function create_cad_service(data: Partial<cad_drawing>) {
  return db.cad_drawing.create({
    data: {
      name: data.name as string,
      file_path: data.file_path as string,
      user_id: data.user_id as string,
      file_type: data.file_type as string,
    },
  })
}

export async function get_full_cad_details(id: string) {
  return db.cad_drawing.findUnique({
    where: { id },
    include: {
      document_info: true,
      measurements: {
        orderBy: {
          category: 'asc',
        },
      },
      materials: {
        include: {
          material: true,
        },
      },
      features: true,
      assemblies: true,
      classifications: true,
    },
  })
}
