'use client'

import { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from 'ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'ui/form'
import { Input } from 'ui/input'
import { Checkbox } from 'ui/checkbox'
import { Separator } from 'ui/separator'
import { signupSchema } from '~/schemas/auth'
import { user_role } from '@prisma/client'
import GoogleLogo from '../icons/google-logo'
import AppleLogo from '../icons/apple-logo'
import Link from 'next/link'
import { create_user } from '~/actions/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

type SignupFormValues = z.infer<typeof signupSchema>

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      role: user_role.USER,
      terms_accepted: false,
    },
  })

  function onSubmit(data: SignupFormValues) {
    startTransition(async () => {
      await create_user(data).then((res) => {
        if (res.success) {
          toast.success('Account created successfully!', {
            description: 'Please check your email for verification.',
          })
          setTimeout(() => {
            router.push('/login')
          }, 2000)
        } else {
          toast.error('Error creating account', {
            description: res.error ?? 'Something went wrong',
          })
        }
      })
    })
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Get started now</h1>
        <p className="text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() => signIn('google', { redirectTo: '/' })}
        >
          <GoogleLogo />
          Sign up with Google
        </Button>
        <Button variant="outline" className="w-full" type="button" disabled>
          <AppleLogo />
          Sign up with Apple
        </Button>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <Separator className="flex-1" />
        <span className="text-muted-foreground">Or</span>
        <Separator className="flex-1" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter full name"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@example.com"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-xs text-blue-500"
                    type="button"
                  >
                    Forget password?
                  </Button>
                </div>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      {...field}
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-0 right-0 h-full px-3 py-2"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showPassword ? 'Hide password' : 'Show password'}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormDescription>Min 8 characters</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms_accepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-y-0 space-x-3 py-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    disabled={isLoading}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    I agree to{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                      terms
                    </a>{' '}
                    &{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                      privacy
                    </a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#1C99FF] text-white hover:bg-[#1C99FF]/80"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait ...
              </>
            ) : (
              'Sign up'
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        Have an account?{' '}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>

      <div className="text-muted-foreground pt-8 text-center text-xs">
        2025 Andrew Constructions. All right reserved
      </div>
    </div>
  )
}
