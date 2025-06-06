'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useConversations } from '~/app/queries'
import { useConversationStore } from '~/hooks/conversation-store'

export function ConversationToggle() {
  const toggleDrawer = useConversationStore((state) => state.toggleDrawer)
  const { refetch } = useConversations()

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={() => {
        toggleDrawer()
        refetch()
      }}
      className="bg-primary fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none dark:text-gray-800"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative h-6 w-6">
        <motion.div
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <MessageCircle className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.button>
  )
}
