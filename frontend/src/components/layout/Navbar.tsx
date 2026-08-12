'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

const navItems = [
  { href: '/dashboard', label: 'Home' },
  { href: '/team', label: 'Team Page' },
  { href: '/notes', label: 'Notes' },
  { href: '/profile', label: 'Profile' },
  { href: '/settings', label: 'Settings' },
]

export function Navbar() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }

  return (
    <header className="flex h-8 items-center justify-between border-b border-zinc-300 bg-zinc-100">
      <div className="flex h-full">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center border-r border-zinc-300 px-3 text-xs text-slate-700 hover:bg-zinc-200"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 px-3">
        {user && <span className="hidden text-xs text-slate-500 sm:block">{user.email}</span>}
        <Link
          href="/profile"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-colors hover:bg-slate-300"
          aria-label="Profile"
        >
          <User className="h-3.5 w-3.5" />
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Sign out"
        >
          <LogOut className="h-3.5 w-3.5" />
        </button>
      </div>
    </header>
  )
}
