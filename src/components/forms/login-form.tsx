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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'ui/form'
import { Input } from 'ui/input'
import { Checkbox } from 'ui/checkbox'
import { Separator } from 'ui/separator'
import { loginSchema } from '~/schemas/auth'
import Link from 'next/link'
import { toast } from 'sonner'
import GoogleLogo from '../icons/google-logo'
import AppleLogo from '../icons/apple-logo'
import { login } from '~/actions/auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('redirect')
  const router = useRouter()
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember_me: false,
    },
  })

  async function onSubmit(data: LoginFormValues) {
    startTransition(async () => {
      await login(data).then(async (res) => {
        if (res.success) {
          toast.success('Login successfully!', {
            description: 'Welcome back to your account.',
          })
          await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
          })
          const redirect = callbackUrl ?? '/'
          setTimeout(() => {
            router.push(redirect)
          }, 2000)
        } else {
          toast.error(res.error ?? 'Unable to login', {
            description: 'Please check your credentials and try again.',
          })
        }
      })
    })
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 p-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
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
          Login with Google
        </Button>
        <Button variant="outline" className="w-full" type="button" disabled>
          <AppleLogo />
          Login with Apple
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
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
                    Forgot password?
                  </Button>
                </div>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Min 8 characters"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-0 right-0 h-full px-3 py-2"
                      onClick={() => setShowPassword(!showPassword)}
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remember_me"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-y-0 space-x-3 py-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    Keep me logged in
                  </FormLabel>
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
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </div>

      <div className="text-muted-foreground pt-8 text-center text-xs">
        2025 Andrew Constructions. All right reserved
      </div>
    </div>
  )
}
