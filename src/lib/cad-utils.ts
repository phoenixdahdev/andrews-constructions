/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Format measurements to match the expected response structure
 */
export function formatMeasurements(measurements: any[]) {
  // Group measurements by category
  const measurementsByCategory = measurements.reduce((acc, measurement) => {
    const category =
      measurement.category ||
      mapMeasurementTypeToCategory(measurement.measurement_type)

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push({
      name: measurement.name,
      size: measurement.size,
    })

    return acc
  }, {})

  return measurementsByCategory
}

/**
 * Map measurement type to category if category is not available
 */
export function mapMeasurementTypeToCategory(measurementType: string) {
  const mapping = {
    STRUCTURAL_ELEMENT: 'structural_elements',
    ROOM: 'rooms',
    COMPONENT: 'components',
    SPACING: 'spacings',
    THICKNESS: 'thicknesses',
    TOTAL_THICKNESS: 'total_thicknesses',
  }
  return mapping[measurementType as keyof typeof mapping] || 'other'
}

/**
 * Format materials with their material needs to match the expected response structure
 */
export function formatMaterials(materialNeeds: any[]) {
  const materialsByCategory = materialNeeds.reduce((acc, materialNeed) => {
    const category = materialNeed.material.category.toLowerCase()

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push({
      name: materialNeed.material.name,
      specification: materialNeed.material.specification,
    })

    return acc
  }, {})

  return materialsByCategory
}

/**
 * Format classifications to match the expected response structure
 */
export function formatClassifications(classifications: any[]) {
  const classificationsByCategory = classifications.reduce(
    (acc, classification) => {
      const category = classification.category.toLowerCase()

      if (!acc[category]) {
        acc[category] = []
      }

      acc[category].push({
        name: classification.name,
        specification: classification.specification,
      })

      return acc
    },
    {}
  )

  return classificationsByCategory
}

export function parseFloatFromSize(sizeStr: string): number | null {
  if (!sizeStr) return null
  const match = sizeStr.match(/(\d+(\.\d+)?)/)
  if (match && match[1]) {
    return parseFloat(match[1])
  }
  return null
}

export function extractUnitFromSize(sizeStr: string): string | null {
  if (!sizeStr) return null
  const units = ['m', 'cm', 'mm', 'ft', 'inches', 'in']

  for (const unit of units) {
    if (sizeStr.includes(unit)) {
      return unit
    }
  }

  return null
}
