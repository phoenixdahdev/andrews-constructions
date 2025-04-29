'use client'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '~/lib/utils'

export function Switch({
  className,
  children,
  ...props
}: SwitchPrimitive.SwitchProps) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'bg-gray-medium shadow-gray-light data-[state=checked]:bg-primary relative h-[25px] w-[42px] cursor-pointer rounded-full shadow-[0_2px_2px] outline-none disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </SwitchPrimitive.Root>
  )
}

export function SwitchThumb({
  className,
  ...props
}: SwitchPrimitive.SwitchThumbProps) {
  return (
    <SwitchPrimitive.Thumb
      className={cn(
        'shadow-gray-light block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]',
        className
      )}
      {...props}
    />
  )
}
