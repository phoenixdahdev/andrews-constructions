import { auth } from 'auth'
import { type NextRequest, NextResponse } from 'next/server'
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT } from './route'

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (isApiAuthRoute(pathname)) {
    return null
  }

  const session = await auth()
  const isLoggedIn = !!session
  if (isAuthRoute(pathname)) {
    return handleAuthRoute(isLoggedIn, req)
  }
  if (!isLoggedIn) {
    return redirectToLogin(pathname, req)
  }

  return null
}

function isApiAuthRoute(pathname: string): boolean {
  return pathname.startsWith(apiAuthPrefix)
}

function isAuthRoute(pathname: string): boolean {
  return authRoutes.includes(pathname)
}

function handleAuthRoute(isLoggedIn: boolean, req: NextRequest) {
  if (isLoggedIn) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url))
  }
  return null
}

function redirectToLogin(pathname: string, req: NextRequest) {
  return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, req.url))
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
