'use client'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { update_profile, get_user_info } from '~/lib/user-profile-utils'
import { toast } from 'sonner'
import { Switch, SwitchThumb } from '~/components/ui/switch'
import { Loader2 } from 'lucide-react'
import { Button } from '~/components/ui/button'
import PasswordInput from '~/components/settings/PasswordInput'
import {
  confirm_current_password,
  change_password,
} from '~/lib/password-change'

export default function Page() {
  const { data: session } = useSession()
  const [twoStep, setTwoStep] = useState<boolean | null>(null)
  const [initializing, setInitializing] = useState<boolean>(false)
  const [uploading, setUploading] = useState<boolean>(false)
  const [passwordUploading, setPasswordUploading] = useState<boolean>(false)
  const [changed, setChanged] = useState<boolean>(false)
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [currentPasswordConfirmed, setCurrentPasswordConfirmed] =
    useState<boolean>(false)
  const [newPassword1, setNewPassword1] = useState<string>('')
  const [newPassword2, setNewPassword2] = useState<string>('')
  const [error, setError] = useState<number>(0)

  async function handleCheck() {
    setUploading(true)
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
        setUploading(false)
      }
    }
  }
  useEffect(() => {
    setInitializing(true)
    async function fetchProfile() {
      if (!session?.user.id) return
      try {
        const response = await get_user_info(session?.user.id)
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
        setInitializing(false)
      }
    }
    fetchProfile()
  }, [session?.user.id])
  return (
    <div className="font-roboto flex w-full flex-col gap-[24px]">
      {initializing ? (
        <div className="my-auto flex justify-center">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <h3 className="bg-gray-medium text-gray-dark rounded-t-[12px] px-[16px] text-[18px] leading-[59px] font-medium">
              Two-Step Verification
            </h3>
            <div className="border-gray-medium flex flex-col gap-[16px] rounded-b-[12px] border-[1px] p-[16px]">
              <div className="flex w-full justify-between">
                <p className="text-gray-dark leading-[24px] font-medium">
                  Enable two-step verification
                </p>
                <div className="flex gap-[16px]">
                  {uploading && (
                    <Loader2
                      className="text-primary animate-spin items-center"
                      size="20"
                    />
                  )}
                  {/* Temporarily disabled */}
                  {twoStep !== null && (
                    <Switch
                      id="two-Step"
                      checked={twoStep}
                      onCheckedChange={handleCheck}
                      disabled
                      // disabled={uploading || passwordUploading }
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
            {/* Temporarily disabled */}
            <div className="border-gray-medium flex flex-col gap-[16px] rounded-b-[12px] border-[1px] p-[16px]">
              {!currentPasswordConfirmed ? (
                <PasswordInput
                  label="Current password"
                  value={currentPassword}
                  onChange={(value) => {
                    setError(0)
                    setChanged(true)
                    setCurrentPassword(value)
                  }}
                  placeholder="Enter your current password"
                  error={error === 1 ? 'Invalid password' : ''}
                  disabled={true}
                />
              ) : (
                <>
                  <PasswordInput
                    label="New password"
                    value={newPassword1}
                    onChange={(value) => {
                      setError(0)
                      setChanged(true)
                      setNewPassword1(value)
                    }}
                    placeholder="Enter your new password"
                    error={
                      error === 2
                        ? 'Password must be at least 8 characters'
                        : ''
                    }
                    onBlur={() => {
                      if (newPassword1.trim().length < 8) setError(2)
                    }}
                  />
                  <PasswordInput
                    label="Confirm new password"
                    value={newPassword2}
                    onChange={(value) => {
                      setError(0)
                      setChanged(true)
                      setNewPassword2(value)
                    }}
                    placeholder="Confirm your new password"
                    error={error === 3 ? 'Password does not match' : ''}
                    onBlur={() => {
                      if (newPassword2 !== newPassword1) setError(3)
                    }}
                  />
                </>
              )}
            </div>
          </div>
          {!currentPasswordConfirmed ? (
            <Button
              onClick={async () => {
                if (!session?.user.id) return
                setPasswordUploading(true)
                const confirmPassword = await confirm_current_password(
                  currentPassword,
                  session?.user.id
                )
                if (!confirmPassword.success && confirmPassword.error) {
                  setError(1)
                  setPasswordUploading(false)
                  return
                }
                setCurrentPasswordConfirmed(true)
                setChanged(false)
                setPasswordUploading(false)
              }}
              // disabled={
              //   !changed || passwordUploading || uploading || error !== 0
              // }
              disabled
              className="bg-primary !border-accent hover:bg-primary/80 min-h-[56px] w-fit rounded-[8px] border-[2px] px-[24px] text-[16px] leading-[24px] font-medium text-white"
            >
              Change Password
              {passwordUploading && (
                <Loader2
                  className="animate-spin items-center text-white"
                  size="20"
                />
              )}
            </Button>
          ) : (
            <div className="flex gap-[8px]">
              <Button
                className="!border-primary text-primary hover:text-primary/80 hover:!border-primary/80 min-h-[56px] rounded-[8px] border-[2px] px-[24px] text-[16px] leading-[24px] font-medium disabled:opacity-50"
                variant="outline"
                onClick={() => {
                  setCurrentPassword('')
                  setNewPassword1('')
                  setNewPassword2('')
                  setChanged(false)
                  setCurrentPasswordConfirmed(false)
                  setError(0)
                }}
                disabled={uploading}
              >
                Discard changes
              </Button>
              <Button
                className="bg-primary !border-accent hover:bg-primary/80 min-h-[56px] w-fit rounded-[8px] border-[2px] px-[24px] text-[16px] leading-[24px] font-medium text-white"
                disabled={
                  !changed || passwordUploading || uploading || error !== 0
                }
                onClick={async () => {
                  if (newPassword2 !== newPassword1) {
                    setError(3)
                    return
                  }
                  if (!session?.user.id) return
                  setPasswordUploading(true)
                  const updatePassword = await change_password(
                    newPassword1,
                    session.user.id
                  )
                  if (!updatePassword.success) {
                    console.error(updatePassword.error)
                    toast.error('ERROR OCCURED', {
                      description: updatePassword.error,
                    })
                    setPasswordUploading(false)
                    return
                  }
                  toast.success('SECURITY SETTINGS UPDATED', {
                    description: 'Password has been successfully updated',
                  })
                  setPasswordUploading(false)
                  setCurrentPassword('')
                  setNewPassword1('')
                  setNewPassword2('')
                  setChanged(false)
                  setCurrentPasswordConfirmed(false)
                }}
              >
                Save Password
                {passwordUploading && (
                  <Loader2
                    className="animate-spin items-center text-white"
                    size="20"
                  />
                )}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
