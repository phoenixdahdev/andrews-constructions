'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Camera, Loader2 } from 'lucide-react'
import { uploadS3File } from '~/actions/file-upload'
import { update_profile } from '~/lib/user-profile-utils'
import { toast } from 'sonner'

export default function Page() {
  const { data: session, update: updateSession } = useSession()
  const [editing, setEditing] = useState<boolean>(false)
  const [name, setName] = useState<string | undefined>(session?.user.name)
  const [email, setEmail] = useState<string | undefined>(session?.user.email)
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(
    session?.user.profile_image ? session?.user.profile_image : undefined
  )
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [changed, setChanged] = useState<boolean>(false)

  const fallBack = name && name[0].toUpperCase()

  async function handleSubmit() {
    if (!name || name.trim() === '') {
      setError('nameErr')
      toast.error('Name is required', {
        description: 'Please enter your name',
      })
      return
    }
    setUploading(true)
    setError('')
    let uploadedUrl = ''
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('file_id', `file_${Date.now()}`)
      formData.append('file_type', file.type)
      formData.append('folder_name', 'uploads')

      try {
        const response = await uploadS3File(formData)

        if (!response || !response.response || response.status !== 'success') {
          console.error('File upload error:', response?.message)
          toast.error('ERROR OCCURED', {
            description:
              'An error occurred while uploading the picture, try again later',
          })
          setUploading(false)
          return
        }
        uploadedUrl = response.response.url
        setAvatarUrl(response.response.url)
      } catch (err) {
        console.error('File upload error:', err)
        toast.error('ERROR OCCURED', {
          description:
            'An error occurred while uploading the picture, try again later',
        })
        setUploading(false)
        return
      }
    }
    if (session?.user.id) {
      try {
        const data = uploadedUrl
          ? { name: name.trim(), profile_image: uploadedUrl }
          : { name: name.trim() }
        const response = await update_profile(session.user.id, data)
        if (response.success) {
          await updateSession({
            ...session.user,
            ...data,
          })
          toast.success('PROFILE SETTINGS UPDATED', {
            description:
              'Congratulations! Your profile has been successfully updated.',
          })
        } else {
          console.error('Profile update error:', response.error)
          toast.error('ERROR OCCURED', {
            description:
              'An error occured while updating user settings, try again later',
          })
        }
      } catch (err) {
        console.error('Profile update error:', err)
        toast.error('ERROR OCCURED', {
          description:
            'An error occured while updating user settings, try again later',
        })
        setUploading(false)
      } finally {
        setUploading(false)
      }
    }
    setError('')
    setEditing(false)
  }

  return (
    <div className="font-roboto mb-[60px] flex w-full flex-col">
      <h3 className="bg-gray-medium text-gray-dark rounded-t-[12px] px-[16px] text-[18px] leading-[59px] font-medium">
        User information
      </h3>

      <div className="border-gray-medium flex flex-col gap-[16px] rounded-b-[12px] border-[1px] p-[16px]">
        <div className="relative">
          <Avatar className="bg-accent flex h-[200px] w-[200px] items-center justify-center rounded-[16px]">
            <AvatarImage
              src={avatarUrl}
              className="h-[200px] w-[200px] rounded-[16px] object-cover object-center"
            />
            <AvatarFallback className="text-[60px]">{fallBack}</AvatarFallback>
          </Avatar>
          {editing && (
            <>
              <div className="absolute top-0 flex size-[200px] items-center justify-center rounded-[16px] bg-black/50">
                <Camera size="50" color="white" strokeWidth={1} />
              </div>
              <Input
                type="file"
                accept="image/*"
                className="absolute top-0 z-50 size-[200px] cursor-pointer rounded-[16px] opacity-0"
                onChange={(e) => {
                  setFile(null)
                  setAvatarUrl(session?.user.profile_image || undefined)
                  if (!e.target.files) return
                  const file = e.target.files[0]
                  if (!file) return
                  if (!file.type.startsWith('image/')) {
                    setError('picErr')
                    return
                  }
                  if (error === 'picErr') setError('')
                  setChanged(true)
                  setFile(file)
                  const preview = URL.createObjectURL(file)
                  setAvatarUrl(preview)
                }}
              />
            </>
          )}
        </div>

        <div className="flex flex-col gap-[2px]">
          <p className="text-gray-light leading-[24px]">Username</p>
          {!editing ? (
            <p className="text-gray-dark leading-[24px] font-medium">{name}</p>
          ) : (
            <Input
              value={name}
              onChange={(e) => {
                if (error === 'nameErr') setError('')
                setChanged(true)
                setName(e.currentTarget.value)
              }}
            />
          )}
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-gray-light leading-[24px]">Email</p>
          {!editing ? (
            <p className="text-gray-dark leading-[24px] font-medium">{email}</p>
          ) : (
            <Input
              value={email}
              disabled
              onChange={(e) => {
                setChanged(true)
                setEmail(e.currentTarget.value)
              }}
            />
          )}
        </div>
      </div>

      <div className="flex gap-[8px] pt-[16px]">
        {!editing ? (
          <Button
            className="bg-primary !border-accent hover:bg-primary/80 min-h-[56px] rounded-[8px] border-[2px] px-[24px] text-[16px] leading-[24px] font-medium text-white"
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </Button>
        ) : (
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[8px]">
              <Button
                className="!border-primary text-primary hover:text-primary/80 hover:!border-primary/80 min-h-[56px] rounded-[8px] border-[2px] px-[24px] text-[16px] leading-[24px] font-medium disabled:opacity-50"
                variant="outline"
                onClick={() => {
                  setChanged(false)
                  setEditing(false)
                  setName(session?.user.name || '')
                  setAvatarUrl(session?.user.profile_image || undefined)
                }}
                disabled={uploading}
              >
                Discard changes
              </Button>
              <Button
                className="bg-primary !border-accent hover:bg-primary/80 min-h-[56px] rounded-[8px] border-[2px] px-[24px] text-[16px] leading-[24px] font-medium text-white"
                onClick={() => handleSubmit()}
                disabled={error !== '' || uploading || !changed}
              >
                {uploading ? 'Saving' : 'Save changes'}
                {uploading && (
                  <Loader2 color="white" size="20" className="animate-spin" />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
