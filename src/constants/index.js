import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  sql,
  git,
  figma,
  rightpoint,
  investbook,
  utc,
  esri,
  alemba,
  westerndigital,
  dogadoption,
  roommates,
  tripguide,
  threejs,
  education,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Responsive",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Animations",
    icon: backend,
  },
  {
    title: "Api Integration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front End Software Developer",
    company_name: "Rightpoint",
    icon: rightpoint,
    iconBg: "#383E56",
    date: "April 2022 - April 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to code 3+ software applications from the healthcare to construction sector.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Executed multiple tasks within an agile software development environment using Jira to track progress as well Azure DevOps, Figma, Git version control and GitHub.",
    ],
  },
  {
    title: "Web Content Developer",
    company_name: "Western Digital",
    icon: westerndigital,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Feb 2022",
    points: [
      "Utilized HTML 5 and Tailwind CSS to customize website layout.",
      "Handled 5+ projects with deadlines and built according to design specifications for e-commerce website.",
      "Updated and created websites using Adobe Experience Manager (AEM) based on design specifications.",
    ],
  },
  {
    title: "Web Content Specialist",
    company_name: "Esri",
    icon: esri,
    iconBg: "#383E56",
    date: "March 2020 - July 2020",
    points: [
      "Maintained multiple projects with deadlines as well as with Adobe Experience Manger (AEM) CMS, HTML 5 and CSS.",
      "Collaborated with teammates to finish multiple projects for various stakeholders according to design specifications.",
      "Utilized Site Improve to help increase SEO rankings.",
    ],
  },
  {
    title: "Support Application Analyst",
    company_name: "UTC",
    icon: utc,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - June 2019",
    points: [
      "Researched client's issues and debugged to provide software resolutions with HTML, JavaScript & SQL.",
      "Interacted with customers to diagnose problems and implement configuration requirements and solutions, while simultaneously handling 2-4 tickets a day.",
      "Collaborated with developers, analysts and project managers to expedite incident resolutions",
    ],
  },
  {
    title: "Support Application Analyst",
    company_name: "Alemba",
    icon: alemba,
    iconBg: "#383E56",
    date: "Nov 2018 - June 2019",
    points: [
      "Ran system traces or SQL queries on customer's test systems for possible workarounds or fixes utilizing Microsoft SQL Management Studio.",
      "Maintained effective client communications to increase client satisfaction and improve client retention by 15%.",
      "Collaborated with developers, analysts and project managers to expedite incident resolutions to resolve about 15+ tickets per week.",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company_name: "InvestBook Inc.",
    icon: investbook,
    iconBg: "#E6DEDD",
    date: "July 2015 - April 2017",
    points: [
      "Developed efficient and maintainable web applications utilizing PHP, AJAX, SQL, Bootstrap, WebFlow, jQuery, HTML, and CSS.",
      "Created Firefox and Chrome extensions utilizing HTML5, CSS3, JavaScript, and Node.js.",
      "Utilized MySQL to create databases as well as SQL queries while working with Mailgun API.",
      "Provided software application engineering and maintenance for the software development lifecycle according to business specifications and web design while providing an effect user experience.",
    ],
  },
];

const projects = [
  {
    name: "Dog Adoption Site",
    description:
      "Help you find your new best friend. Adopt a dog or two today! Plus resources for the first time dog owner with convenient shelter locations near you.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: dogadoption,
    url: "https://aerodogadoption.vercel.app/",
    source_code_link: "https://github.com/jvpink200/aerodogadoption",
  },
  {
    name: "Online Educational Learning Platform",
    description:
      "A comprehensive educational learning platform that keeps kids engaged. Plus outdoor activities for kids 12 and under",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
      },
    ],
    image: education,
    url: "https://educational-learning.vercel.app/",
    source_code_link: "https://github.com/jvpink200/education-project",
  },
  {
    name: "Roommate Finder",
    description:
      "Web software application that enables users to search for amazing roommates with common interests and location. Find your perfect roommate and make life long friends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: roommates,
    url: "",
    source_code_link: "https://github.com/",
  },
  {
    name: "Hotel Booking Site",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars with curated recommendations to amazing destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    url: "",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
