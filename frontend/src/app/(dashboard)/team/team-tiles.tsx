import type { TeamMember } from './team-data'

export function TeamTile({ member }: { member: TeamMember }) {
    return (
        <div className="rounded-lg border border-slate-400 bg-white p-6 shadow-sm">
            <img
                src={member.image || '/team/placeholder.svg'}
                alt={member.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-slate-700">{member.name}</h3>
            <p className="text-sm text-slate-500 text-left">{member.role}</p>
            <p className="mt-3 text-sm text-slate-600 text-left leading-relaxed">{member.blurb}</p>
        </div>
    )
}