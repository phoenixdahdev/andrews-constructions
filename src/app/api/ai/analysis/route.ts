import { generateObject } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const constructionAnalysisSchema = z.object({
  document_type: z.string(),
  measurements: z.object({
    structural_elements: z.array(
      z.object({
        name: z.string(),
        size: z.string(),
        value: z.number().nullish(),
        unit: z.string().nullish(),
        x_coordinate: z.number().nullish(),
        y_coordinate: z.number().nullish(),
      }),
    ),
    rooms: z.array(
      z.object({
        name: z.string(),
        size: z.string(),
        value: z.number().nullish(),
        unit: z.string().nullish(),
        x_coordinate: z.number().nullish(),
        y_coordinate: z.number().nullish(),
      }),
    ),
    components: z.array(
      z.object({
        name: z.string(),
        size: z.string(),
        value: z.number().nullish(),
        unit: z.string().nullish(),
        x_coordinate: z.number().nullish(),
        y_coordinate: z.number().nullish(),
      }),
    ),
    spacings: z.array(
      z.object({
        name: z.string(),
        size: z.string(),
        value: z.number().nullish(),
        unit: z.string().nullish(),
        x_coordinate: z.number().nullish(),
        y_coordinate: z.number().nullish(),
      }),
    ),
    thicknesses: z.array(
      z.object({
        name: z.string(),
        size: z.string(),
        value: z.number().nullish(),
        unit: z.string().nullish(),
        x_coordinate: z.number().nullish(),
        y_coordinate: z.number().nullish(),
      }),
    ),
    total_thicknesses: z.array(
      z.object({
        name: z.string(),
        size: z.string(),
        value: z.number().nullish(),
        unit: z.string().nullish(),
        x_coordinate: z.number().nullish(),
        y_coordinate: z.number().nullish(),
      }),
    ),
  }),
  materials: z.object({
    structural: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        description: z.string().nullish(),
        category: z.string().nullish(),
        unit_price: z.number().nullish(),
        currency: z.string().nullish(),
        quantity: z.number().nullish(),
        unit: z.string().nullish(),
      }),
    ),
    insulation: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        description: z.string().nullish(),
        category: z.string().nullish(),
        unit_price: z.number().nullish(),
        currency: z.string().nullish(),
        quantity: z.number().nullish(),
        unit: z.string().nullish(),
      }),
    ),
    fire_protection: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        description: z.string().nullish(),
        category: z.string().nullish(),
        unit_price: z.number().nullish(),
        currency: z.string().nullish(),
        quantity: z.number().nullish(),
        unit: z.string().nullish(),
      }),
    ),
    membranes: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        description: z.string().nullish(),
        category: z.string().nullish(),
        unit_price: z.number().nullish(),
        currency: z.string().nullish(),
        quantity: z.number().nullish(),
        unit: z.string().nullish(),
      }),
    ),
    fasteners: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        description: z.string().nullish(),
        category: z.string().nullish(),
        unit_price: z.number().nullish(),
        currency: z.string().nullish(),
        quantity: z.number().nullish(),
        unit: z.string().nullish(),
      }),
    ),
    sheathing: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        description: z.string().nullish(),
        category: z.string().nullish(),
        unit_price: z.number().nullish(),
        currency: z.string().nullish(),
        quantity: z.number().nullish(),
        unit: z.string().nullish(),
      }),
    ),
    surface_materials: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        description: z.string().nullish(),
        category: z.string().nullish(),
        unit_price: z.number().nullish(),
        currency: z.string().nullish(),
        quantity: z.number().nullish(),
        unit: z.string().nullish(),
      }),
    ),
  }),
  classifications: z.object({
    fire_ratings: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        category: z.string().nullish(),
      }),
    ),
    environmental: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        category: z.string().nullish(),
      }),
    ),
    standards_compliance: z.array(
      z.object({
        name: z.string(),
        specification: z.string(),
        category: z.string().nullish(),
      }),
    ),
  }),
  assemblies: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
    }),
  ),
  features: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
    }),
  ),
  document_info: z.object({
    title: z.string().nullish(),
    reference: z.string().nullish(),
    date: z.string().nullish(),
    revision: z.string().nullish(),
    author: z.string().nullish(),
    project: z.string().nullish(),
    client: z.string().nullish(),
  }),
  others: z.array(
    z.object({
      category: z.string(),
      name: z.string(),
      value: z.string(),
      description: z.string().nullish(),
      size: z.string().nullish(),
      dimensions: z.string().nullish(),
      unit: z.string().nullish(),
      quantity: z.number().nullish(),
      x_coordinate: z.number().nullish(),
      y_coordinate: z.number().nullish(),
      specification: z.string().nullish(),
    }),
  ),
})

export async function POST(req: NextRequest) {
  try {
    const { file_url, file_type } = await req.json()

    console.log("Received file_url:", file_url)
    console.log("Received file_type:", file_type)

    if (!file_url) {
      return NextResponse.json({ error: "No file URL provided" }, { status: 400 })
    }

    const response = await fetch(file_url)
    if (!response.ok) {
      return NextResponse.json(
        {
          error: `Failed to fetch file from URL: ${response.status} ${response.statusText}`,
        },
        { status: 400 },
      )
    }

    const fileBuffer = await response.arrayBuffer()

    const prompt = `Extract complete and comprehensive information from this construction document.

Analyze the document in extreme detail and provide a structured response that captures EVERY single element, specification, measurement, and material mentioned. Don't summarize or omit any information.

Parse ALL measurements exactly as they appear in the document, maintaining both imperial and metric formats when present (e.g., "8 x 8 x 16 inches (20 x 20 x 41 cm)" or "4 x 8 ft(1.2 x 2.4 m)").

IMPORTANT: First identify what TYPE of construction document this is (floor plan, roof plan, elevation, section, etc.) and adapt your analysis accordingly. Do not force residential categories onto commercial documents or vice versa.

For measurements, include:
- Exact size as text (e.g., "8 x 8 x 16 inches")
- Numerical value when possible (convert to consistent unit)
- Unit of measurement
- Coordinates if identifiable on the drawing

For materials, include:
- Complete specifications
- Quantities when mentioned
- Unit prices if available
- Categories and descriptions

CRITICAL: For ANY information that doesn't fit into the predefined categories (measurements, materials, classifications, assemblies, features, document_info), add it to the "others" array. This includes but is not limited to:
- Unit types and designations (e.g., "UNIT TYPE 6", "UNIT TYPE 7a")
- Equipment specifications (e.g., "R.W.P.", "H/L TV POINT")
- Plant numbers and identifiers
- Bay numbers and designations
- Electrical specifications (voltage, amperage, model numbers)
- HVAC equipment details
- Facility requirements and calculations
- Drawing references
- Revision information
- Any codes, numbers, or identifiers that appear in the document
- Equipment model numbers and specifications
- Operational requirements
- Safety requirements
- Access requirements

For the "others" section, provide comprehensive details:
- Use "category" to group similar items (e.g., "Unit Designations", "Plant Numbers", "Electrical Equipment", "Bay Designations", "Drawing References")
- Use "name" for the specific identifier or label
- Use "value" for the associated value, specification, or description
- Use "size" for dimensional information when applicable (e.g., "900 x 1200", "2400mm Wide x 1200mm")
- Use "dimensions" for more complex dimensional descriptions
- Use "unit" for measurement units
- Use "quantity" for numerical quantities
- Use "specification" for detailed technical specifications
- Use "description" for additional context if needed
- Include coordinates if the item has a specific location on the drawing

IMPORTANT: If any field doesn't have a value, you can set it to null or omit it entirely.

Extract EVERY single piece of information from the document. If a category doesn't apply, include it as an empty array.

For construction documents like roof plans or wall sections, pay special attention to:
1. Layer-by-layer build-ups and their total thicknesses
2. Material specifications including brand names, model numbers, and performance ratings
3. Compliance with building codes and standards
4. Assembly descriptions that explain how components fit together
5. Special features like access hatches, joints, or penetrations
6. All annotations, labels, and reference numbers
7. Equipment specifications and model numbers
8. Plant numbers and facility designations
9. Dimensional information for all components
10. Coordinate positions where identifiable`

    const result = await generateObject({
      model: openai("gpt-4-turbo"),
      schema: constructionAnalysisSchema,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
            {
              type: "file",
              mimeType: file_type,
              data: new Uint8Array(fileBuffer),
            },
          ],
        },
      ],
    })
    return NextResponse.json({
      success: true,
      analysis: result.object,
    })
  } catch (error) {
    console.error("Error analyzing construction document:", error)
    return NextResponse.json(
      {
        error: "Failed to analyze construction document",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
