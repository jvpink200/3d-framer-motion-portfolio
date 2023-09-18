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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
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
    title: "Software Developer",
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
    iconBg: "#E6DEDD",
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
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "jsx",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Roommate Finder",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
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
        name: "css",
        color: "pink-text-gradient",
      },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
