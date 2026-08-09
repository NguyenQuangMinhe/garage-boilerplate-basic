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
    image: '/team/placeholder.svg',
  },
  {
    name: 'Perry Tsironis',
    role: 'Developer',
    blurb: 'Information Technology student with a passion for Data Science and problem solving in logical ways.',
    image: '/team/perry.jpg',
  },
  {
    name: 'Nguyen Quang Minh',
    role: 'Developer',
    blurb: 'Always looking forward to learning new things and applying them.',
    image: '/team/quang.png',
  },
  {
    name: 'Ming Yan Tan',
    role: 'Business Analyst',
    blurb: 'Turning business bottlenecks into clean requirements, fulfilling client requirements.',
    image: '/team/placeholder.svg',
  },
  {
    name: 'Jamie Rottura',
    role: 'UX Designer',
    blurb: 'Always willing to help others and learn new skills.',
    image: '/team/jamie.png',
  }

];