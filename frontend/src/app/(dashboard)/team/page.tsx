import type { Metadata } from 'next';
import { requireAuth } from '@/actions/auth.actions'
import { teamMembers } from './team-data'
import { TeamTile } from './team-tiles'

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {
  await requireAuth()

  const positions = [
    "lg:col-start-1 lg:row-start-1",
    "lg:col-start-1 lg:row-start-3",
    "lg:col-start-2 lg:row-start-2",
    "lg:col-start-3 lg:row-start-1",
    "lg:col-start-3 lg:row-start-3",
  ]



  return (
    <div className="space-y-6">

        <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100 text-center">Meet the Team</h1>
            <p className="mt-1 text-sm text-zinc-400 text-center">Learn more about the team behind this project.</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-6">
            {teamMembers.map((member, index) => (
                <div key={member.name} className={positions[index]}>
                    <TeamTile member={member} />
                </div>
            ))}
        </div>

    </div>
  )
}