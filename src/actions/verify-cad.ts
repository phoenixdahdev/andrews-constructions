import { generateText } from 'ai'
import { getEnvVariables } from './getenv'
import { createOpenAI } from '@ai-sdk/openai'

/**
 * Validates if a file is a CAD drawing using Google's Gemini AI
 * @param file The file to validate
 * @returns A boolean indicating if the file is a valid CAD drawing
 */
export async function validateCadFile(file: File): Promise<boolean> {
  const base64 = await fileToBase64(file)

  const { SYSTEM_FILE_VALIDATOR_PROMPT, OPENAI_API_KEY } =
    await getEnvVariables('SYSTEM_FILE_VALIDATOR_PROMPT', 'OPENAI_API_KEY')

  const openai = createOpenAI({
    apiKey: OPENAI_API_KEY,
  })

  try {
    const fileName = file.name
    const fileExtension = fileName.split('.').pop()?.toLowerCase() || ''
    const fileSize = file.size
    const fileType = file.type
    if (fileExtension === 'dwg' || fileExtension === 'dxf') {
      return true
    }

    let fileContent = null
    if (fileType.startsWith('image/')) {
      fileContent = await fileToBase64(file)
    }

    const fileInfo = {
      name: fileName,
      extension: fileExtension,
      size: fileSize,
      type: fileType,
      content: fileType.startsWith('image/') ? fileContent : '',
    }

    const { text: result } = await generateText({
      model: openai('gpt-4o-mini'),

      system: SYSTEM_FILE_VALIDATOR_PROMPT?.replace(/\\n/g, '\n'),
      prompt: `
Analyze the following file information and determine if it's a valid CAD drawing.

File Information:
- Name: ${fileInfo.name}
- Extension: ${fileInfo.extension}
- Size: ${fileInfo.size} bytes
- MIME Type: ${fileInfo.type}
- Content: ${fileType.startsWith('image/') ? base64 : fileInfo.content}

INSTRUCTIONS:
1. Carefully examine the file information and content
2. For images, look for characteristic elements of CAD drawings:
   - Straight lines forming walls, rooms, or structures
   - Dimension lines with measurements
   - Technical annotations or reference numbers
   - Room names or designations
   - Drawing scales or grid references

RESPOND WITH:
- ONLY "true" if the file is likely a CAD drawing (including photographs of printed CAD drawings)
- ONLY "false" if the file is likely NOT a CAD drawing

Your response MUST be JUST the word "true" or "false" with no additional text or explanation.
`,
    })
    const isValid = result.trim().toLowerCase() === 'true'
    return isValid
  } catch (error) {
    console.error('Error in validateCadFile:', error)
    return false
  }
}

/**
 * Converts a file to a base64 string
 */
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result as string
      resolve(result)
    }
    reader.onerror = (error) => reject(error)
  })
}
