'use client'
import EmptyState from './empty-state'
import { useCadDrawings } from '~/app/queries'
import LoadingScreen from './cad-loader'
import type { cad_drawing } from '@prisma/client'
import { format, isToday, isYesterday } from 'date-fns'
import { useSearch } from '~/hooks/use-search'
import { Card, CardContent } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import BlurImage from '~/components/miscellaneous/blur-image'
import { useRouter } from 'next/navigation'
import { set_current_cad } from '~/actions/cad'
import { useUploadDialogStore } from '~/hooks/use-upload-dialog-store'

const HomePage = () => {
  const { isPending, isLoading, data, isError } = useCadDrawings()
  const { openDialog } = useUploadDialogStore()
  const { search } = useSearch()
  const router = useRouter()

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) {
      return '/pdf.png'
    } else if (fileType.includes('image')) {
      return '/placeholder.svg?height=50&width=50'
    } else {
      return '/placeholder.svg?height=50&width=50'
    }
  }

  const groupFilesByDate = (files: cad_drawing[]) => {
    const groups: { [key: string]: cad_drawing[] } = {}

    files.forEach((file) => {
      const date = new Date(file.uploaded_at)
      let dateKey
      if (isToday(date)) {
        dateKey = 'Today'
      } else if (isYesterday(date)) {
        dateKey = 'Yesterday'
      } else {
        dateKey = format(date, 'MMM d, yyyy')
      }

      if (!groups[dateKey]) {
        groups[dateKey] = []
      }

      groups[dateKey].push(file)
    })

    return groups
  }

  const filteredFiles = data?.data?.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  )
  const groupedFiles = groupFilesByDate(filteredFiles || [])

  return isLoading || isPending ? (
    <LoadingScreen />
  ) : !data?.success || !filteredFiles?.length || isError ? (
    <EmptyState />
  ) : (
    <div className="mx-auto w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">History</h1>
        <label htmlFor="file-upload">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 rounded-md border-2 border-[#1C99FF] px-6 py-4 text-[#1C99FF] hover:bg-blue-50"
            onClick={() => openDialog()}
          >
            <BlurImage src="/cloud-upload.png" alt="" height={20} width={20} />
            Upload File to Get Started
          </Button>
        </label>
      </div>
      {Object.entries(groupedFiles).map(([date, files]) => (
        <div key={date} className="my-8">
          <h2 className="mb-4 text-lg font-medium">{date}</h2>

          {files.map((file) => (
            <Card
              key={file.id}
              onClick={async () => {
                await set_current_cad(file.id)
                router.push(
                  `/cad/${file.name.replace(' ', '-').toLocaleLowerCase()}`
                )
              }}
              className="mb-4 cursor-pointer rounded-[8px] border border-[#E7E7E7] transition duration-200 ease-in-out dark:border-[#2A2A2A]"
            >
              <CardContent className="px-4">
                <div className="flex items-center">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-gray-100">
                    <BlurImage
                      src={getFileIcon(file.file_type) || '/placeholder.svg'}
                      alt={file.name}
                      className="h-full w-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-medium">{file.name}</h3>
                    <p className="text-gray-500">
                      {format(file.uploaded_at, 'h:mma')}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" aria-label="View">
                      <BlurImage
                        src="/eye.png"
                        width={20}
                        alt="eye"
                        height={20}
                      />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Download">
                      <BlurImage
                        src="/download.png"
                        width={20}
                        alt="eye"
                        height={20}
                      />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Delete">
                      <BlurImage
                        src="/delete.png"
                        width={20}
                        alt="eye"
                        height={20}
                      />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HomePage
