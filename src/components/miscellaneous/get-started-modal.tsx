'use client'

import { Button } from 'ui/button'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { retrive_onboarding, set_onboarding } from '~/actions/miscellaneous'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const has_onboarded = async () => {
      await retrive_onboarding().then((res) => {
        if (res) {
          return
        } else {
          setIsOpen(true)
        }
      })
    }
    has_onboarded()
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F5FAFF]/50 dark:bg-[rgba(0,_10,_20,_0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative mx-4 max-w-xl rounded-xl bg-white shadow-xl dark:bg-gray-800"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex flex-col items-center justify-center p-6 pt-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-[#333] dark:text-white">
                Welcome to Andrew Construction Solution
              </h2>

              <p className="mb-6 text-gray-800 opacity-90 dark:text-white">
                The AI-driven construction software streamlines the process of
                measuring and managing materials, ensuring precision and
                efficiency in every project.
              </p>
              <Button
                onClick={async () => {
                  setIsOpen(false)
                  await set_onboarding()
                }}
                className="get-started-button cursor-pointer bg-blue-500 px-6 py-2 font-medium text-white hover:bg-blue-600"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
