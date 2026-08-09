import type { Metadata } from 'next';
import { requireAuth } from '@/actions/auth.actions'
import { teamMembers } from './team-data'
import { TeamTile } from './team-tiles'

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {
  await requireAuth()

  const [left1, left2, middle, right1, right2] = teamMembers

  return (
    <div className="space-y-6">

        <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100 text-center">Meet the Team</h1>
            <p className="mt-1 text-sm text-zinc-400 text-center">Learn more about the team behind this project.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">

            <div className="flex flex-col gap-6 lg:w-80">
                <TeamTile member={left1} />
                <TeamTile member={left2} />
            </div>

            <div className="flex flex-col justify-center lg:w-80">
                <TeamTile member={middle} />
            </div>

            <div className="flex flex-col gap-6 lg:w-80">
                <TeamTile member={right1} />
                <TeamTile member={right2} />
            </div>
        </div>
    </div>
  )
}