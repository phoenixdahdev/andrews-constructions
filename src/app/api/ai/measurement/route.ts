import { google } from "@ai-sdk/google"
import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"


export async function POST(req: NextRequest) {
    try {
        const { imageUrl } = await req.json()

        if (!imageUrl) {
            return NextResponse.json({ error: "No image URL provided" }, { status: 400 })
        }
        const response = await fetch(imageUrl)
        if (!response.ok) {
            return NextResponse.json(
                {
                    error: `Failed to fetch image from URL: ${response.status} ${response.statusText}`,
                },
                { status: 400 },
            )
        }

        const imageBuffer = await response.arrayBuffer()

        const prompt = `
      Analyze this floor plan image in detail. 
      
      Provide a structured JSON response with the following information:
      1. Overall dimensions of the floor plan
      2. Structural elements (wall thickness, floor thickness)
      3. Rooms identified (bedrooms, bathrooms, kitchen, living areas)
      4. Measurements for each room
      5. Special features (windows, doors, fixtures)
      
      Format the response as a JSON object with these main categories:
      {
        "dimensions": { "width": "value", "length": "value" },
        "structural": [
          { "name": "element name", "size": "measurement" }
        ],
        "rooms": [
          { 
            "type": "room type",
            "measurements": { "width": "value", "length": "value", "area": "value" },
            "features": ["feature1", "feature2"]
          }
        ]
      }
    `

        const result = await generateText({
            model: google("gemini-1.5-pro"),
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: prompt,
                        },
                        {
                            type: "image",
                            image: new Uint8Array(imageBuffer),
                        },
                    ],
                },
            ],
        })

        console.log("Model response:", result.text)

        let parsedResponse
        try {
            const textResponse = result.text
            const jsonMatch = textResponse.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || textResponse.match(/\{[\s\S]*\}/)

            const jsonString = jsonMatch ? jsonMatch[1] || jsonMatch[0] : textResponse
            parsedResponse = JSON.parse(jsonString)
        } catch {
            return NextResponse.json({
                success: false,
                error: "Failed to parse model response as JSON",
                rawResponse: result.text,
            })
        }
        return NextResponse.json({
            success: true,
            analysis: parsedResponse,
        })
    } catch (error) {
        console.error("Error analyzing floor plan:", error)
        return NextResponse.json({ error: "Failed to analyze floor plan", details: error instanceof Error ? error.message : "Unknown error" }, { status: 500 })
    }
}
