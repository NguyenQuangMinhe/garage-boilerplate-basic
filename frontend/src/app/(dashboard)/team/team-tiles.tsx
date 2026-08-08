type TeamMember = {
    name: string;
    role: string;
    blurb: string;
    image: string;
};

export function TeamTile({ member }: { member: TeamMember }) {
    return (
        <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-6 shadow-md">
            <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">{member.name}</h3>
            <p className="text-sm text-zinc-400 text-left">{member.role}</p>
            <p className="mt-3 text-sm text-zinc-300 text-left leading-relaxed">{member.blurb}</p>
        </div>
    )
}