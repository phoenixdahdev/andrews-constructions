import { toast } from 'sonner'
import { useState } from 'react'
import { Input } from 'ui/input'
import { Label } from 'ui/label'
import { cn } from '~/lib/utils'
import { Button } from 'ui/button'
import { create_cad } from '~/actions/cad'
import React, { useTransition } from 'react'
import { useCadDrawings } from '~/app/queries'
import { uploadS3File } from '~/actions/file-upload'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { validateCadFile } from '~/actions/verify-cad'
import { Spinner } from '~/components/miscellaneous/spinner'
import { ArrowRight, FileIcon, Loader2, Trash2, X } from 'lucide-react'
import BlurImage from '~/components/miscellaneous/blur-image'
import { useUploadDialogStore } from '~/hooks/use-upload-dialog-store'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'ui/dialog'

export function UploadDialog() {
  const {
    isOpen,
    fileState,
    openDialog,
    closeDialog,
    setTitle,
    setFile,
    removeFile,
    reset,
  } = useUploadDialogStore()
  const [isDragging, setIsDragging] = useState(false)
  const [isVerifying, startVerifying] = useTransition()
  const [isPending, startTransition] = useTransition()
  const { refetch } = useCadDrawings()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const processFile = (file: File | null) => {
    if (!file) {
      toast.error('No file detected', {
        description: 'Please drag and drop a valid CAD file (DWG, DXF, or PDF)',
      })
      return
    }
    startVerifying(async () => {
      try {
        setFile(file)
        // const isValid = await validateCadFile(file)
        // if (isValid) {
        //   setFile(file)
        // } else {
        //   toast.error('File validation failed', {
        //     description: 'Please upload a valid CAD file (DWG, DXF, or PDF)',
        //   })
        // }
      } catch (err) {
        console.error('Error validating file:', err)
        toast.error('An error occurred during validation', {
          description: 'Please try again later',
        })
      }
    })
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    processFile(file)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    processFile(file)
  }

  const handleOpenChange = (open: boolean) => {
    if (open) {
      openDialog()
    } else {
      closeDialog()
      removeFile()
    }
  }

  const handleSubmit = () => {
    startTransition(async () => {
      const formData = new FormData()
      formData.append('folder_name', 'uploads')
      formData.append('file_id', `file_${Date.now()}`)
      formData.append('name', `file_${fileState.title}`)
      formData.append('file', fileState.uploadFile?.file as File)
      formData.append('file_type', fileState.uploadFile?.file.type as string)
      await uploadS3File(formData)
        .then(async (res) => {
          const cad = await create_cad({
            name: fileState.title,
            file_path: res?.response?.url as string,
            file_type: fileState.uploadFile?.file.type as string,
          })
          if (cad.success) {
            await refetch()
            closeDialog()
            reset()
          } else {
            toast.error('An unexpected error occured')
          }
          if (res?.status === 'success') {
            toast.success('File uploaded successfully', {
              description: 'Your file has been uploaded to S3',
            })
          } else {
            toast.error('File upload failed', {
              description: res?.message || 'Please try again later',
            })
          }
        })
        .catch((err) => {
          console.error('Error uploading file:', err)
          toast.error('An error occurred during upload', {
            description: 'Please try again later',
          })
        })
    })
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()

    if (extension === 'pdf') {
      return <BlurImage src="/pdf.png" alt="pdf" width={30} height={30} />
    } else if (
      ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '')
    ) {
      return <FileIcon className="h-5 w-5 text-blue-500" />
    } else if (['dwg', 'dxf'].includes(extension || '')) {
      return <FileIcon className="h-5 w-5 text-green-500" />
    }

    return <FileIcon className="h-5 w-5 text-gray-500" />
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="rounded-xl sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Upload file to get started
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-base font-medium">
              Enter title<span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Enter a title for your CAD drawing..."
              value={fileState.title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isVerifying || isPending}
            />
          </div>

          {isVerifying ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-gray-200 p-8">
              <Spinner size="lg" className="text-blue-500" />
              <p className="text-center font-medium text-gray-700">
                Validating your file...
              </p>
              <p className="text-center text-sm text-gray-500">
                This may take a moment
              </p>
            </div>
          ) : fileState.uploadFile ? (
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="file" className="text-base font-medium">
                  Uploaded CAD drawing
                </Label>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 rounded-full p-0"
                  onClick={() => {
                    removeFile()
                  }}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  {getFileIcon(fileState.uploadFile.file.name)}
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium text-gray-700">
                        {fileState.uploadFile.file.name}
                      </span>
                    </div>

                    <div className="mt-1 text-sm text-gray-500">
                      {Math.round(fileState.uploadFile.file.size / 1024)}KB
                    </div>
                  </div>
                  <button
                    onClick={removeFile}
                    className="text-red-500 transition-colors hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-2">
              <Label htmlFor="file" className="text-base font-medium">
                Upload CAD drawing<span className="text-red-500">*</span>
              </Label>
              <div
                className={cn(
                  'rounded-md border-2 border-dashed p-8 text-center',
                  isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center gap-2">
                  <label
                    htmlFor="file-upload"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-blue-800 px-6 py-2 text-blue-500 hover:bg-blue-50"
                    style={{
                      gap: 'var(--Spacing-Gap-XS, 8px)',
                      borderRadius: 'var(--Radius-4, 8px)',
                      border: '1.5px solid var(--Colors-Primary-800, #1C99FF)',
                      padding: '8px 24px',
                    }}
                  >
                    <BlurImage
                      src="/cloud-upload.png"
                      alt=""
                      height={20}
                      width={20}
                    />
                    Upload
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept=".dwg,.dxf,.pdf"
                      // accept=".dwg,.dxf,.pdf,image/png,image/jpeg,image/jpg,image/webp,image/svg+xml"
                      onChange={handleFileChange}
                    />
                  </label>

                  <p className="text-base font-medium text-gray-700">
                    Choose image or drag & drop here
                  </p>
                  <p className="text-sm text-gray-500">
                    DWG, DXF, or PDF. Max 20MB
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#8ECCFF] bg-[#1C99FF] px-6 py-3 text-white hover:bg-blue-600 disabled:opacity-50"
            disabled={
              !fileState.title ||
              !fileState.uploadFile ||
              isVerifying ||
              isPending
            }
            onClick={handleSubmit}
          >
            {isPending ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                Proceed <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
