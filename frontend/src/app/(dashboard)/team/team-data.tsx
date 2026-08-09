export type TeamMember = {
  name: string;
  role: string;
  blurb: string;
  image: string;
}

export const teamMembers: [TeamMember, TeamMember, TeamMember, TeamMember, TeamMember] = [
  {
    name: 'Reese Lucal Paul',
    role: 'Project Manager',
    blurb: 'Striving to help both my team and our clients get what they need.',
    image: '/placeholder.png',
  },
  {
    name: 'Perry Tsironis',
    role: 'Developer',
    blurb: 'Information Technology student with a passion for Data Science and problem solving in logical ways.',
    image: '/placeholder.png',
  },
  {
    name: 'Nguyen Quang Minh',
    role: 'Developer',
    blurb: 'Always looking forward to learning new things and applying them.',
    image: '/placeholder.png',
  },
  {
    name: 'Ming Yan Tan',
    role: 'Business Analyst',
    blurb: 'Turning business bottlenecks into clean requirements, fulfilling client requirements.',
    image: '/placeholder.png',
  },
  {
    name: 'Jamie Rottura',
    role: 'UX Designer',
    blurb: 'This is a placeholder for Jamie\'s blurb.',
    image: '/placeholder.png',
  }

];