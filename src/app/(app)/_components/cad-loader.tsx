import { Skeleton } from '~/components/ui/skeleton'

export default function LoadingScreen() {
  return (
    <div className="hide-scrollbar overflow-hidden">
      <div className="flex">
        <div className="flex-1 overflow-hidden p-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="mb-4 rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-md" />
                <div className="flex-1">
                  <Skeleton className="mb-2 h-5 w-48" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
          ))}

          {[1, 2, 3].map((i) => (
            <div key={i} className="mb-4 rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-md" />
                <div className="flex-1">
                  <Skeleton className="mb-2 h-5 w-64" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
