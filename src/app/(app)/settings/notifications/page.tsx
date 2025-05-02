'use client'
import { useSession } from 'next-auth/react'
import { Switch, SwitchThumb } from '~/components/ui/switch'
import { Button } from '~/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { update_notification_preferences } from '~/lib/user-profile-utils'

export default function Page() {
  const { data: session, update: updateSession } = useSession()
  const [uploading, setUploading] = useState<boolean>(false)
  const [changed, setChanged] = useState<boolean>(false)
  const [notification, setNotification] = useState<boolean | null>(
    session?.user.settings.enable_notifications
  )
  const [matNotification, setMatNotification] = useState<boolean | null>(
    session?.user.settings.notify_material_changes
  )
  const [sysNotification, setSysNotification] = useState<boolean | null>(
    session?.user.settings.notify_system_updates
  )

  async function handleSubmit() {
    setUploading(true)
    if (
      session?.user.id &&
      notification !== null &&
      matNotification !== null &&
      sysNotification !== null
    ) {
      const id = session?.user.id
      try {
        const data = {
          enable_notifications: notification,
          notify_material_changes: matNotification,
          notify_system_updates: sysNotification,
        }
        const response = await update_notification_preferences(id, data)
        // console.log(response)
        if (response.success) {
          await updateSession({
            ...session.user,
            settings: {
              ...session.user.settings,
              ...data,
            },
          })
          toast.success('NOTIFICATION PREFERENCES UPDATED', {
            description:
              'Congratulations! Your notification preferences has successfully been updated.',
          })
        } else {
          console.error(response.error)
          toast.error('ERROR OCCURED', {
            description:
              'An error occured while updating notification preferences, try again later',
          })
        }
      } catch (err) {
        console.error(err)
        toast.error('ERROR OCCURED', {
          description:
            'An error occured while updating notification preferences, try again later',
        })
      }
    }
    setUploading(false)
  }
  return (
    <div className="font-roboto flex w-full flex-col gap-[24px]">
      <div className="flex flex-col">
        <h3 className="bg-gray-medium text-gray-dark rounded-t-[12px] px-[16px] text-[18px] leading-[59px] font-medium">
          Notification Preferences
        </h3>
        <div className="border-gray-medium flex flex-col gap-[16px] rounded-b-[12px] border-[1px] p-[16px]">
          <div className="flex w-full justify-between">
            <p className="text-gray-dark leading-[24px] font-medium">
              Enable notifications
            </p>
            <div className="flex items-center gap-[16px]">
              {notification !== null && (
                <Switch
                  id="notification"
                  checked={notification}
                  onCheckedChange={() => {
                    setChanged(true)
                    setNotification((prev) => !prev)
                  }}
                >
                  <SwitchThumb />
                </Switch>
              )}
            </div>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-gray-dark leading-[24px] font-medium">
              Get notified about real time material changes
            </p>
            <div className="flex items-center gap-[16px]">
              {matNotification !== null && (
                <Switch
                  id="mat-notification"
                  checked={matNotification}
                  onCheckedChange={() => {
                    setChanged(true)
                    setMatNotification((prev) => !prev)
                  }}
                >
                  <SwitchThumb />
                </Switch>
              )}
            </div>
          </div>
          <div className="flex w-full justify-between">
            <p className="text-gray-dark leading-[24px] font-medium">
              Get notified about system update
            </p>
            <div className="flex items-center gap-[16px]">
              {sysNotification !== null && (
                <Switch
                  id="notification"
                  checked={sysNotification}
                  onCheckedChange={() => {
                    setChanged(true)
                    setSysNotification((prev) => !prev)
                  }}
                >
                  <SwitchThumb />
                </Switch>
              )}
            </div>
          </div>
        </div>
      </div>
      <Button
        className="bg-primary !border-accent hover:bg-primary/80 min-h-[56px] w-fit rounded-[8px] border-[2px] px-[24px] text-[16px] leading-[24px] font-medium text-white"
        onClick={() => handleSubmit()}
        disabled={uploading || !changed}
      >
        {uploading ? 'Saving' : 'Save changes'}
        {uploading && (
          <Loader2 color="white" size="20" className="animate-spin" />
        )}
      </Button>
    </div>
  )
}
