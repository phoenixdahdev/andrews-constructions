'use client'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '~/context/theme-context'

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme({ x: e.clientX, y: e.clientY })
  }
  const isDark = theme === 'dark'

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={handleClick}
      className="bg-primary fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none dark:text-gray-800"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative h-6 w-6">
        <motion.div
          initial={{ opacity: isDark ? 0 : 1, rotate: isDark ? -90 : 0 }}
          animate={{ opacity: isDark ? 0 : 1, rotate: isDark ? -90 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5" />
        </motion.div>

        <motion.div
          initial={{ opacity: isDark ? 1 : 0, rotate: isDark ? 0 : 90 }}
          animate={{ opacity: isDark ? 1 : 0, rotate: isDark ? 0 : 90 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.button>
  )
}
