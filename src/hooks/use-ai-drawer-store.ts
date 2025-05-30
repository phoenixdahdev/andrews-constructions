import { create } from 'zustand'

type AIDrawerState = {
  isOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

export const useAIDrawerStore = create<AIDrawerState>((set) => ({
  isOpen: false,
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
}))
