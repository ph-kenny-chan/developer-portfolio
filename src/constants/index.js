import {
  frontend,
  backend,
  ux,
  prototyping,
  java,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mongodb,
} from '../assets';

export const aboutParagraphs = [
  'Kenny is an experienced software developer who worked in different companies in various Industries and provides user-friendly solutions for internal users and customers. He is willing to relocate in UK in the future.',
  'He has been working as the System Analyst at Manulife HK since 2018. By developing knowledge of core insurances, software design and vendor management skills, he showed his efficiency in developing the core insurance internal system enhancement of the Volunteering Health Insurance Scheme (VHIS) on the hard deadline in April 2019. As he wants to expand on FinTech products in his career, he joins HKT Financial Services in 2020, which is a FinTech arm of the famous leading telecom HKT Group. He participates in developing Backend API microservices on “HKT Flexi” Mobile Application using his experiences on Java, vendor management skills and agile software development approach.',
  'As Software Development is a fast-paced industry, Kenny keeps learning on new trending technology skills like machine learning and AI Programming.',
  'On days when he is not doing the project and coding, he is focusing on doing everything on football. Playing on the pitch as a defender, watching football matches and playing any kinds of football games with his friends and family are his favourite things to do in his free time.'
];

export const navLinks = [
  {
    id: 'about',
    title: 'About Kenny',
  },
  {
    id: 'tech',
    title: 'Techs',
  },
  {
    id: 'works',
    title: 'Experiences',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Project Management',
    icon: prototyping,
  },
  {
    title: 'Search Engine Optimization (SEO)',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'mongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Software Engineer',
    company_name: 'Pocket Trader',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Present',
  },
  {
    title: 'System Analyst',
    company_name: 'HKT Financial Services',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2020 - Jul 2021',
  },
  {
    title: 'System Analyst',
    company_name: 'Manulife HK',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Dec 2018 - Dec 2019',
  },
  {
    title: 'Analyst Programmer',
    company_name: 'Kunhne and Nagel',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2016 - Nov 2018',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
