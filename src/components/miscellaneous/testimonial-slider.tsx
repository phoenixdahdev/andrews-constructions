'use client'
import BlurImage from './blur-image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    text: "Andrew Construction Solution has revolutionized our team! We can now extract accurate measurements from CAD drawings, enhancing our workflow. It's a must-have for construction pros!",
    author: 'Devon Lane',
    position: 'Co-Founder, Design.co',
    avatar: '/placeholder.svg?height=50&width=50',
  },
  {
    id: 2,
    text: 'This platform has completely transformed how we handle CAD drawings. The precision and ease of use are unmatched in the industry.',
    author: 'Sarah Johnson',
    position: 'Project Manager, BuildTech',
    avatar: '/placeholder.svg?height=50&width=50',
  },
  {
    id: 3,
    text: 'The measurement accuracy we get from Andrew Construction Solution has reduced errors by 85%. Our clients are impressed with our improved efficiency.',
    author: 'Michael Chen',
    position: 'Lead Architect, StructureX',
    avatar: '/placeholder.svg?height=50&width=50',
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div className="relative">
      <div className="mb-6 flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-6 w-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>

      <div className="relative h-[180px] overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <blockquote className="mb-6 max-w-lg">
              <p className="text-lg leading-relaxed font-medium">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-blue-400">
                <BlurImage
                  src={testimonials[currentIndex].avatar || '/placeholder.svg'}
                  alt={testimonials[currentIndex].author}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm opacity-80">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
