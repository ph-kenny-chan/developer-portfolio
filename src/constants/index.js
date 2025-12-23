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
  manulife,
  hkt,
  kn,
  pocket_trader,
  qhms,
  mongodb,
  hktflexi,
  pt_marketing_site,
  pt_app,
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
    id: 'projects',
    title: 'Proejcts',
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
    title: 'Senior Application Analyst',
    company_name: 'Quality HealthCare Medical Services Limited',
    icon: qhms,
    iconBg: '#333333',
    date: 'Apr 2025 - Present'
  },
  {
    title: 'Full Stack Software Engineer',
    company_name: 'Pocket Trader',
    icon: pocket_trader,
    iconBg: '#333333',
    date: 'Aug 2021 - Aug 2024'
  },
  {
    title: 'System Analyst',
    company_name: 'HKT Financial Services',
    icon: hkt,
    iconBg: '#333333',
    date: 'Jan 2020 - Jul 2021'
  },
  {
    title: 'System Analyst',
    company_name: 'Manulife HK',
    icon: manulife,
    iconBg: '#333333',
    date: 'Dec 2018 - Dec 2019'
  },
  {
    title: 'Analyst Programmer',
    company_name: 'Kunhne and Nagel',
    icon: kn,
    iconBg: '#333333',
    date: 'Oct 2016 - Nov 2018'
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Pocket Trader',
    description: 'Forex Social Trading Platform',
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
    image: pt_app,
    demo: 'https://pockettrader.app',
  },
  {
    id: 'project-2',
    name: 'Pocket Trader Marketing Website',
    description:
      'Pocket Trader Marketing Website Revamp',
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
    image: pt_marketing_site,
    demo: 'https://pocket-trader.com',
  },
  {
    id: 'project-3',
    name: 'HKT Flexi',
    description: 'HKT Financial Services Loan Application',
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
    image: hktflexi,
    demo: 'https://www.hktflexi.com/en/',
  }
];

export { services, technologies, experiences, projects };
