export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
  children?: React.ReactNode
}

type ThemeState = 'light' | 'dark' | 'system'

type ServiceResponse<T> = {
  success: boolean
  error: string | null
  data: T | null
}

export type Measurement = {
  name: string
  size: string
}

export type Material = {
  name: string
  specification: string
}

export type Classification = {
  name: string
  specification: string
}

export type Assembly = {
  name: string
  description: string
}

export type Feature = {
  name: string
  description: string
}

export type DocumentInfo = {
  title: string
  reference: string
  date: string
  revision: string
  author: string
  project: string
  client: string
}
