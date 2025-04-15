import React, { Suspense } from 'react'
import BlurImage from '~/components/miscellaneous/blur-image'
import TestimonialSlider from '~/components/miscellaneous/testimonial-slider'
import { FloatingThemeToggle } from '~/components/miscellaneous/floating-theme-toggle'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense>
      <div className="grid h-screen w-full gap-x-8 lg:grid-cols-2">
        <div className="relative flex flex-1 flex-col justify-between overflow-hidden p-8 text-white md:p-24">
          <div className="relative z-10">
            <h1 className="font-roboto-condensed mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Welcome to our community
            </h1>
            <p className="max-w-md text-lg">
              Andrew Construction Solution helps users get accurate measurements
              and material needs from their CAD drawings.
            </p>
          </div>

          <div className="relative z-10">
            <TestimonialSlider />
          </div>
          <BlurImage src="/authbg.png" fill alt="bg" className="absolute" />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
      <FloatingThemeToggle />
    </Suspense>
  )
}
