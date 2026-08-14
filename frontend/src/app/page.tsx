// From signin/page.tsx
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

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to the app',
// }

export default function LandingPage() {
  // From signin/page.tsx
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
        router.replace('/dashboard')
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
        router.replace('/dashboard') //Redirect to team page on successful login
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
        router.replace('/dashboard')
      } catch {
        toast.error('Google sign-in failed. Please try again.')
      }
    }
  // Design by UX then code extrapolated from ChatGPT directly, with modifications after
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Your app description goes here. Edit{' '}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-sm dark:bg-zinc-800">
            src/app/page.tsx
          </code>{' '}
          to get started.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/auth/signin"
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Sign in
        </Link>

        <Link
          href="/auth/signup"
          className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
        >
          Create account
        </Link>
      </div>
    </main>
  )
}
