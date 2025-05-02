import { create } from "zustand"

type Message = {
    id: string
    role: "system" | "user" | "assistant"
    content: string
    isOptimization?: boolean
}

type AIDrawerState = {
    isOpen: boolean
    messages: Message[]
    inputValue: string
    openDrawer: () => void
    closeDrawer: () => void
    setInputValue: (value: string) => void
    addMessage: (message: Omit<Message, "id">) => void
    clearMessages: () => void
}

export const useAIDrawerStore = create<AIDrawerState>((set) => ({
    isOpen: false,
    messages: [
        {
            id: "1",
            role: "system",
            content: "Welcome to Chat AI\nHow do you want me to be of help?",
        },
    ],
    inputValue: "",
    openDrawer: () => set({ isOpen: true }),
    closeDrawer: () => set({ isOpen: false }),
    setInputValue: (value: string) => set({ inputValue: value }),
    addMessage: (message) =>
        set((state) => ({
            messages: [...state.messages, { ...message, id: Date.now().toString() }],
        })),
    clearMessages: () =>
        set({
            messages: [
                {
                    id: "1",
                    role: "system",
                    content: "Welcome to Chat AI\nHow do you want me to be of help?",
                },
            ],
        }),
}))
