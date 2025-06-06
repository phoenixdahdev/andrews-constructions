'use client'
import { Skeleton } from 'ui/skeleton'
import { set_current_chat } from '~/actions/chat'
import { MessageCircle, Calendar } from 'lucide-react'
import { formatDistanceToNow, format } from 'date-fns'
import { useAIDrawerStore } from '~/hooks/use-ai-drawer-store'
import { useConversationStore } from '~/hooks/conversation-store'
import { useConversationById, useConversations } from '~/app/queries'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from 'ui/sheet'

export function ConversationHistory() {
  const { isOpen, openDrawer, closeDrawer } = useConversationStore()
  const { openDrawer: open } = useAIDrawerStore()
  const { data: conversations, isLoading, error, refetch } = useConversations()
  const { refetch: newfetch } = useConversationById()

  const handleOpenChange = async (open: boolean) => {
    if (open) {
      openDrawer()
      await refetch()
    } else {
      closeDrawer()
    }
  }

  const handleConversationClick = async (conversationId: string) => {
    await set_current_chat(conversationId)
    await newfetch()
    open()
    closeDrawer()
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="right-2 my-auto h-[95dvh] w-full rounded-2xl border-l p-0 sm:max-w-md md:max-w-lg">
        <SheetHeader className="border-b p-6">
          <SheetTitle>Conversation History</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {isLoading && (
            <div className="space-y-2 px-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1 space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-2/3" />
                      <div className="mt-2 flex items-center gap-4">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="p-6">
              <p className="text-destructive">Failed to load conversations</p>
            </div>
          )}

          {!isLoading &&
            !error &&
            (!conversations || conversations.length === 0) && (
              <div className="p-6">
                <p className="text-muted-foreground">No conversations found.</p>
              </div>
            )}

          {!isLoading &&
            !error &&
            conversations &&
            conversations.length > 0 && (
              <div className="space-y-2 px-4">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => handleConversationClick(conversation.id)}
                    className="group hover:bg-muted/50 cursor-pointer rounded-lg border p-4 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="group-hover:text-primary truncate text-sm font-medium">
                          {conversation.title}
                        </h3>
                        {conversation.description && (
                          <p className="text-muted-foreground mt-1 line-clamp-2 text-xs">
                            {conversation.description}
                          </p>
                        )}
                        <div className="text-muted-foreground mt-2 flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>
                              {conversation.messages?.length || 0} messages
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span
                              title={format(
                                new Date(conversation.updated_at),
                                'PPpp'
                              )}
                            >
                              {formatDistanceToNow(
                                new Date(conversation.updated_at),
                                { addSuffix: true }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
