import { create } from 'zustand'

type UploadFile = {
  file: File
  progress: number
  uploading: boolean
}

type FileState = {
  uploadFile: UploadFile | null
  title: string
}

type DialogState = {
  isOpen: boolean
  fileState: FileState
  openDialog: () => void
  closeDialog: () => void
  setTitle: (title: string) => void
  setFile: (file: File | null) => void
  setProgress: (progress: number) => void
  removeFile: () => void
  reset: () => void
}

export const useUploadDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  fileState: {
    uploadFile: null,
    title: '',
  },
  openDialog: () => set({ isOpen: true }),
  closeDialog: () => set({ isOpen: false }),
  setTitle: (title: string) =>
    set((state) => ({ fileState: { ...state.fileState, title } })),
  setFile: (file: File | null) =>
    set((state) => ({
      fileState: {
        ...state.fileState,
        uploadFile: file ? { file, progress: 0, uploading: true } : null,
      },
    })),
  setProgress: (progress: number) =>
    set((state) => ({
      fileState: {
        ...state.fileState,
        uploadFile: state.fileState.uploadFile
          ? { ...state.fileState.uploadFile, progress }
          : null,
      },
    })),
  removeFile: () =>
    set((state) => ({
      fileState: {
        ...state.fileState,
        uploadFile: null,
      },
    })),
  reset: () => set({ fileState: { uploadFile: null, title: '' } }),
}))
