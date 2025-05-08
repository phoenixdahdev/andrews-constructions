/* eslint-disable @typescript-eslint/no-unused-vars */
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";

export async function POST(req: NextRequest) {
    try {
        const { file_url, file_type } = await req.json();

        if (!file_url) {
            return NextResponse.json({ error: "No file URL provided" }, { status: 400 });
        }


        const response = await fetch(file_url);
        if (!response.ok) {
            return NextResponse.json(
                {
                    error: `Failed to fetch file from URL: ${response.status} ${response.statusText}`,
                },
                { status: 400 }
            );
        }

        const fileBuffer = await response.arrayBuffer();


        const fileTypeSpecific = file_type.includes("pdf")
            ? "Extract information from this floor plan PDF."
            : "Analyze this floor plan image in detail.";

        //     const prompt = `
        //   ${fileTypeSpecific}

        //   Analyze the floor plan and provide a structured response with the following categories:

        //   1. Structural elements (wall thickness, floor thickness)
        //   2. Rooms (bedrooms, bathrooms, living areas, kitchen)
        //   3. Measurements for each element and room

        //   Format your analysis to match exactly this structure:
        //   {
        //     "structural_elements": [
        //       { "name": "Exterior wall", "size": "8 inches thick(20 cm)" },
        //       { "name": "Interior wall", "size": "6 inches thick(15 cm)" },
        //       { "name": "Floor thickness", "size": "6 inches thick(15 cm)" }
        //     ],
        //     "bedroom": [
        //       { "name": "Bed space", "size": "3.5 x 6.5 ft(2 m)" },
        //       { "name": "Compact bedroom", "size": "8 x 10 ft(3 m)" }
        //     ],
        //     "living_room": [
        //       { "name": "Sitting area", "size": "6 x 8 ft(2.4 m)" },
        //       { "name": "Compact Living Room", "size": "10 x 12 ft(3.6 m)" }
        //     ],
        //     "kitchen": [
        //       { "name": "Countertop Depth", "size": "24 - 30 inches(76 cm)" },
        //       { "name": "Minimal Kitchen", "size": "5 x 7 ft(2.1 m)" }
        //     ]
        //   }
        // `;

        //         const prompt = `Extract complete and comprehensive information from this construction document.

        // Analyze the document in extreme detail and provide a structured response that captures EVERY single element, specification, measurement, and material mentioned. Don't summarize or omit any information.

        // Parse ALL measurements exactly as they appear in the document, maintaining both imperial and metric formats when present (e.g., "8 x 8 x 16 inches (20 x 20 x 41 cm)" or "4 x 8 ft(1.2 x 2.4 m)").

        // Organize the information into two main categories - measurements and materials:

        // 1. MEASUREMENTS: All dimensional information, sizes, thicknesses, spacings, areas, volumes
        // 2. MATERIALS: All materials specifications, types, brands, models, performance ratings

        // Format your analysis to match exactly this structure:
        // {
        //   "measurements": {
        //     "structural_elements": [
        //       { "name": "[Element name]", "size": "[Exact dimensions as shown, e.g., '8 x 8 x 16 inches (20 x 20 x 41 cm)']" }
        //     ],
        //     "rooms": [
        //       { "name": "[Room name]", "size": "[Exact dimensions as shown, e.g., '4 x 8 ft(1.2 x 2.4 m)']" }
        //     ],
        //     "components": [
        //       { "name": "[Component name]", "size": "[Exact dimensions as shown]" }
        //     ],
        //     "spacings": [
        //       { "name": "[Spacing name]", "size": "[Exact spacing as shown, e.g., '400mm centers']" }
        //     ]
        //   },
        //   "materials": {
        //     "structural": [
        //       { "name": "[Material name]", "specification": "[Full specification as shown]" }
        //     ],
        //     "insulation": [
        //       { "name": "[Insulation type]", "specification": "[Full specification as shown]" }
        //     ],
        //     "fire_protection": [
        //       { "name": "[Protection element]", "specification": "[Full specification as shown]" }
        //     ],
        //     "membranes": [
        //       { "name": "[Membrane type]", "specification": "[Full specification as shown]" }
        //     ],
        //     "fasteners": [
        //       { "name": "[Fastener type]", "specification": "[Full specification as shown]" }
        //     ]
        //   },
        //   "classifications": {
        //     "fire_ratings": [
        //       { "name": "[Rating name]", "specification": "[Full rating details]" }
        //     ],
        //     "environmental": [
        //       { "name": "[Classification name]", "specification": "[Full classification details]" }
        //     ]
        //   },
        //   "features": [
        //     { "name": "[Feature name]", "description": "[Full feature description]" }
        //   ],
        //   "document_info": {
        //     "title": "[Document title]",
        //     "reference": "[Document reference]",
        //     "date": "[Document date]",
        //     "revision": "[Revision number]",
        //     "author": "[Author/company]"
        //   }
        // }

        // Ensure that every single measurement includes both imperial and metric values exactly as displayed in the document. Do not add or calculate conversions unless they're explicitly shown in the original.

        // Extract EVERY single piece of information from the document. If a category doesn't apply, include it as an empty array. If additional categories are needed to fully represent the document content, add them following the same structure pattern.`

        const prompt = `Extract complete and comprehensive information from this construction document.

Analyze the document in extreme detail and provide a structured response that captures EVERY single element, specification, measurement, and material mentioned. Don't summarize or omit any information.

Parse ALL measurements exactly as they appear in the document, maintaining both imperial and metric formats when present (e.g., "8 x 8 x 16 inches (20 x 20 x 41 cm)" or "4 x 8 ft(1.2 x 2.4 m)").

IMPORTANT: First identify what TYPE of construction document this is (floor plan, roof plan, elevation, section, etc.) and adapt your analysis accordingly. Do not force residential categories onto commercial documents or vice versa.

Organize the information into two main categories - measurements and materials:

1. MEASUREMENTS: All dimensional information, sizes, thicknesses, spacings, areas, volumes
2. MATERIALS: All materials specifications, types, brands, models, performance ratings

Format your analysis to match exactly this structure:
{
  "document_type": "[Identify document type - floor plan, roof plan, elevation, etc.]",
  "measurements": {
    "structural_elements": [
      { "name": "[Element name]", "size": "[Exact dimensions as shown]" }
    ],
    "rooms": [
      { "name": "[Room name]", "size": "[Exact dimensions as shown]" }
    ],
    "components": [
      { "name": "[Component name]", "size": "[Exact dimensions as shown]" }
    ],
    "spacings": [
      { "name": "[Spacing name]", "size": "[Exact spacing as shown]" }
    ],
    "thicknesses": [
      { "name": "[Layer/element name]", "size": "[Exact thickness as shown]" }
    ],
    "total_thicknesses": [
      { "name": "[Assembly name]", "size": "[Total thickness as shown]" }
    ]
  },
  "materials": {
    "structural": [
      { "name": "[Material name]", "specification": "[Full specification as shown]" }
    ],
    "insulation": [
      { "name": "[Insulation type]", "specification": "[Full specification as shown]" }
    ],
    "fire_protection": [
      { "name": "[Protection element]", "specification": "[Full specification as shown]" }
    ],
    "membranes": [
      { "name": "[Membrane type]", "specification": "[Full specification as shown]" }
    ],
    "fasteners": [
      { "name": "[Fastener type]", "specification": "[Full specification as shown]" }
    ],
    "sheathing": [
      { "name": "[Sheathing material]", "specification": "[Full specification as shown]" }
    ],
    "surface_materials": [
      { "name": "[Surface material]", "specification": "[Full specification as shown]" }
    ]
  },
  "classifications": {
    "fire_ratings": [
      { "name": "[Rating name]", "specification": "[Full rating details]" }
    ],
    "environmental": [
      { "name": "[Classification name]", "specification": "[Full classification details]" }
    ],
    "standards_compliance": [
      { "name": "[Standard name]", "specification": "[Compliance details]" }
    ]
  },
  "assemblies": [
    { "name": "[Assembly name]", "description": "[Full assembly description]" }
  ],
  "features": [
    { "name": "[Feature name]", "description": "[Full feature description]" }
  ],
  "document_info": {
    "title": "[Document title]",
    "reference": "[Document reference]",
    "date": "[Document date]",
    "revision": "[Revision number]",
    "author": "[Author/company]",
    "project": "[Project name]",
    "client": "[Client name]"
  }
}

Ensure that every single measurement is captured exactly as displayed in the document. Do not add or calculate conversions unless they're explicitly shown in the original.

Extract EVERY single piece of information from the document. If a category doesn't apply, include it as an empty array. If additional categories are needed to fully represent the document content, add them following the same structure pattern.

For construction documents like roof plans or wall sections, pay special attention to:
1. Layer-by-layer build-ups and their total thicknesses
2. Material specifications including brand names, model numbers, and performance ratings
3. Compliance with building codes and standards
4. Assembly descriptions that explain how components fit together
5. Special features like access hatches, joints, or penetrations`
        const result = await generateText({
            model: openai("gpt-4-turbo",),
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
        });

        console.log("Model response:", result.text);

        let parsedResponse;
        try {
            const textResponse = result.text;
            const jsonMatch = textResponse.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || textResponse.match(/\{[\s\S]*\}/);

            const jsonString = jsonMatch ? jsonMatch[1] || jsonMatch[0] : textResponse;
            parsedResponse = JSON.parse(jsonString);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return NextResponse.json({
                success: false,
                error: "Failed to parse model response as JSON",
                rawResponse: result.text,
            });
        }

        return NextResponse.json({
            success: true,
            analysis: parsedResponse,
        });
    } catch (error) {
        console.error("Error analyzing floor plan:", error);
        return NextResponse.json(
            {
                error: "Failed to analyze floor plan",
                details: error instanceof Error ? error.message : "Unknown error"
            },
            { status: 500 }
        );
    }
}