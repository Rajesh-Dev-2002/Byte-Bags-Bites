// EDIT THIS FILE to change site name, your details, and categories.
export const SITE = {
  name: 'Byte, Bags & Bites',
  tagline: 'Coding tutorials, trips abroad, and food worth writing about.',
};

export const AUTHOR = {
  name: 'Rajesh Kumar Mohanta',
  role: 'Associate Consultant at BlackBuck',
  location: 'Bengaluru, India',
  photo: 'me.jpg', // put your picture in /public (e.g. me.jpg) and write '/me.jpg'. Empty shows your initials.
  bio: [
    'I work on business analytics & Escalation management, and I write code on the side. This blog is where I share what I learn: coding tutorials, trips to different countries, and the food I find along the way.',
    'Before moving into analytics I trained as a developer. I enjoy turning messy data into something people can act on.',
  ],
  skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Django', 'Power BI', 'Excel','React Js','SEO Analytics'],
  education: [
    'Phd in Computer Science',
    'MCA in Computer Science, LNCT University, Bhopal',
    'B.Sc. in Engineering Physics, North Orissa University, Odisha',
  ],
  // Empty links are hidden automatically. Fill in whichever you want to show.
  links: {
    GitHub: 'https://github.com/Rajesh-Dev-2002',
    LinkedIn: 'https://www.linkedin.com/in/rajesh-kumar-mohanta-2a4703250/',
    Email: 'mailto:rajeshkumarmohanta2001@gmail.com', // e.g. 'mailto:you@example.com'
    Instagram: '',
  },
};

// key = value used in a post's "category:" line. word = big headline word on the home page.
// color = CSS variable in index.css
export const CATEGORIES = {
  coding: { label: 'Coding', word: 'Code.', color: 'var(--code)' },
  travel: { label: 'Travel', word: 'Wander.', color: 'var(--travel)' },
  food: { label: 'Food', word: 'Eat.', color: 'var(--food)' },
};
