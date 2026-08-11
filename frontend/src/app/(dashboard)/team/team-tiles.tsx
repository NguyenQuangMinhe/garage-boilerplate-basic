import type { TeamMember } from './team-data'

export function TeamTile({ member }: { member: TeamMember }) {
    return (
        <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-6 shadow-md">
            <img
                src={member.image || '/team/placeholder.svg'}
                alt={member.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">{member.name}</h3>
            <p className="text-sm text-zinc-400 text-left">{member.role}</p>
            <p className="mt-3 text-sm text-zinc-300 text-left leading-relaxed line-clamp-3">{member.blurb}</p>
        </div>
    )
}