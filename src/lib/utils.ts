import { clsx, type ClassValue } from 'clsx'
import { compare, hash } from 'bcryptjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const inDevEnvironment =
  !!process && process.env.NODE_ENV === 'development'

export const validatorPrompt =
  !!process && process.env.SYSTEM_FILE_VALIDATOR_PROMPT?.replace(/\\n/g, '\n')

export async function hash_password(password: string): Promise<string> {
  return hash(password, 12)
}

export async function compare_password(
  password: string,
  hashed_password: string
): Promise<boolean> {
  return compare(password, hashed_password)
}

export const formatFileSize = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return 'n/a'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${parseFloat((bytes / 1024 ** i).toFixed(2))} ${sizes[i]}`
}
export const generateId = (length: number = 14): string => {
  let result = ''
  const characters = 'ab_cdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}

export function sanitizeText(text: string) {
  return text.replace('<has_function_call>', '')
}

export const base64ToBlob = (base64: string, contentType: string): Blob => {
  const byteCharacters = atob(base64)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: contentType })
}
