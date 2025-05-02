export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
  children?: React.ReactNode
}

type ThemeState = 'light' | 'dark' | 'system'

type ServiceResponse<T> = {
  success: boolean;
  error: string | null;
  data: T | null;
};