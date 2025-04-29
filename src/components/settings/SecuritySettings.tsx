'use client'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { update_profile, get_security_settings } from '~/lib/user-profile-utils'
import { toast } from 'sonner'
import { Switch, SwitchThumb } from '~/components/ui/switch'
import { Input } from '~/components/ui/input'
import { EyeClosed, Eye, Loader2 } from 'lucide-react'
import { Button } from '~/components/ui/button'

export default function SecuritySettings() {
  const { data: session } = useSession()
  const [twoStep, setTwoStep] = useState<boolean | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [reveal, setReveal] = useState<boolean>(false)

  async function handleCheck() {
    setLoading(true)
    if (session?.user.id) {
      const id = session?.user.id
      try {
        const data = { two_step_enabled: !twoStep }
        const response = await update_profile(id, data)
        if (response.success) {
          toast.success('SECURITY SETTINGS UPDATED', {
            description: `Two-step verification turned ${!twoStep ? 'on' : 'off'}`,
          })
          setTwoStep((prev) => !prev)
        } else {
          console.error(response.error)
          toast.error('ERROR OCCURED', {
            description:
              'An error occured while updating user settings, try again later',
          })
        }
      } catch (err) {
        console.error(err)
        toast.error('ERROR OCCURED', {
          description:
            'An error occured while updating user settings, try again later',
        })
      } finally {
        setLoading(false)
      }
    }
  }
  useEffect(() => {
    setLoading(true)
    async function fetchProfile() {
      if (!session?.user.id) return
      try {
        const response = await get_security_settings(session?.user.id)
        if (response && response.success && response.user) {
          const user = response.user
          setTwoStep(user.two_step_enabled)
        }
      } catch (err) {
        console.error(err)
        toast.error('ERROR OCCURED', {
          description:
            "An error occured while fetching user's profile, try again later",
        })
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [session?.user.id])
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="font-roboto flex flex-col">
        <h3 className="bg-gray-medium text-gray-dark rounded-t-[12px] px-[16px] text-[18px] leading-[59px] font-medium">
          Two-Step Verification
        </h3>
        <div className="border-gray-medium flex flex-col gap-[16px] rounded-b-[12px] border-[1px] p-[16px]">
          <div className="flex w-full justify-between">
            <p className="text-gray-dark leading-[24px] font-medium">
              Enable two-step verification
            </p>
            <div className="flex gap-[16px]">
              {loading && (
                <Loader2
                  className="text-primary animate-spin items-center"
                  size="20"
                />
              )}
              {twoStep !== null && (
                <Switch
                  id="two-Step"
                  checked={twoStep}
                  onCheckedChange={handleCheck}
                  disabled
                  // disabled={loading}
                >
                  <SwitchThumb />
                </Switch>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="font-roboto flex flex-col">
        <h3 className="bg-gray-medium text-gray-dark rounded-t-[12px] px-[16px] text-[18px] leading-[59px] font-medium">
          Confirm your password
        </h3>
        {/* Functionalities not implemented */}
        <div className="border-gray-medium flex flex-col gap-[16px] rounded-b-[12px] border-[1px] p-[16px]">
          <label className="text-gray-dark relative flex flex-col gap-[8px] leading-[24px] font-medium">
            Current password:
            <Input
              className="min-h-[40px] rounded-[4px] font-normal"
              placeholder="Enter your current password"
              disabled
              type={`${reveal ? 'text' : 'password'}`}
            />
            <button
              disabled
              className="cursor-pointer disabled:cursor-default"
              onClick={() => setReveal((prev) => !prev)}
            >
              {!reveal ? (
                <EyeClosed
                  className="absolute right-[10px] bottom-[20px]"
                  size="20"
                />
              ) : (
                <Eye
                  className="absolute right-[10px] bottom-[20px]"
                  size="20"
                />
              )}
            </button>
          </label>
        </div>
      </div>
      <Button
        disabled
        className="bg-primary !border-accent hover:bg-primary/80 min-h-[56px] w-fit rounded-[8px] border-[2px] px-[24px] text-[16px] leading-[24px] font-medium text-white"
      >
        Change Password
      </Button>
    </div>
  )
}
