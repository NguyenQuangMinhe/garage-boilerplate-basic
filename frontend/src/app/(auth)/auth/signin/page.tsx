//merging feature/team-page and feature/login resulted in conflicts within (auth)/auth/signin/page.tsx.
//Conflict identification and correction performed with Claude
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'

export default function SignInPage() {
  const router = useRouter()
  const { user, loading, signInWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (!loading && user) {
      router.replace('/team')
    }
  }, [loading, user, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('verification') === 'sent') {
      toast.success('Verification email sent. Verify your email, then sign in.')
    }
  }, [])

  if (loading) return <FullPageSpinner />

  const onSubmit = async (data: LoginInput) => {
    try {
      await signInWithEmail(data.email, data.password)
      toast.success('Signed in successfully')
      router.replace('/team') // Redirect to team page on successful login
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-not-verified')) {
        toast.error('Please verify your email before signing in.')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace('/team')
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }
  // Design by UX then code extrapolated from ChatGPT directly, with modifications after
  return (
    <div className="min-h-screen bg-white text-slate-700">
    {/* Navigation */}
    <nav className="flex h-8 items-center border-b border-zinc-300 bg-zinc-100">
      <div className="flex h-full">
        <Link
          href="/"
          className="flex items-center border-r border-zinc-300 px-3 text-xs hover:bg-zinc-200"
        >
          Home
        </Link>

        <Link
          href="/team"
          className="flex items-center px-3 text-xs hover:bg-zinc-200"
        >
          Team Page
        </Link>
      </div>
    </nav>

    {/* Main content */}
    <main className="mx-auto flex max-w-7xl justify-center px-8 pt-14">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-24">

        {/* Left side */}
        <div className="flex flex-col items-center pt-7">
          <p className="mb-3 text-sm">
            (Insert Logo)
          </p>

          <div className="flex h-36 w-52 items-center justify-center bg-slate-200">
            <svg
              className="h-10 w-10 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M3 17l5-5 4 4 3-3 6 6" />
            </svg>
          </div>

          <p className="mt-5 text-sm">
            (Insert Company Name)
          </p>
        </div>

        {/* Right side */}
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold italic">
            Welcome Back
          </h1>

          <h2 className="mt-4 text-base font-semibold pb-4">
            Sign in
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="h-7 w-full rounded-none border border-slate-400 bg-slate-100 px-2 text-sm shadow-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-400 aria-invalid:border-red-500 placeholder:text-red-500"
                {...register('email')} placeholder={errors.password ? 'Required field' : ''}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className="h-7 w-full rounded-none border border-slate-400 bg-slate-100 px-2 text-sm shadow-sm outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-400 aria-invalid:border-red-500 placeholder:text-red-500 "
                {...register('password')} placeholder={errors.password ? 'Required field' : ''}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs">
                <input type="checkbox" className="h-3.5 w-3.5 rounded border-slate-400" />
                Remember me?
              </label>
              <Link href="/auth/forgot-password" className="text-xs font-semibold hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="h-7 w-full rounded-md bg-slate-600 px-4 text-xs font-medium text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p className="mt-5 text-center text-xs">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="font-medium hover:underline">
              Sign up
            </Link>
          </p>
          {errors.password && (
            <p id="password-error" className="text-center pt-5 text-md text-red-500" role="alert">
              {"Incorrect Email or Password, Try Again"}
            </p>
          )}
        </div>
      </div>
    </main>
  </div>
  )
}