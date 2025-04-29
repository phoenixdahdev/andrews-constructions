'use client'
import { Input } from '../ui/input'
import { useState } from 'react'
import { EyeClosed, Eye } from 'lucide-react'

interface Props {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  error: string
  onBlur?: () => void
  disabled?: boolean
}
export default function PasswordInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  onBlur,
  disabled = false,
}: Props) {
  const [reveal, setReveal] = useState<boolean>(false)
  return (
    <label className="text-gray-dark relative flex flex-col gap-[8px] leading-[24px] font-medium">
      <div className="flex gap-[12px]">
        {label}
        {error != '' && (
          <p className="text-[14px] font-normal text-red-500 italic">{error}</p>
        )}
      </div>
      <Input
        className="min-h-[40px] rounded-[4px] font-normal"
        placeholder={placeholder}
        type={`${reveal ? 'text' : 'password'}`}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        onBlur={onBlur}
        disabled={disabled}
      />
      <button
        className="cursor-pointer disabled:cursor-default"
        onClick={() => setReveal((prev) => !prev)}
        disabled={disabled}
      >
        {!reveal ? (
          <EyeClosed
            className="absolute right-[10px] bottom-[20px]"
            size="20"
          />
        ) : (
          <Eye className="absolute right-[10px] bottom-[20px]" size="20" />
        )}
      </button>
    </label>
  )
}
