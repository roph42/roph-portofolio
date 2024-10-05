// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rophen PADONOU",
  tagline: "I build things for web",
  img: profile,
  about: `I’m a versatile fullstack developer and designer with a passion for creating seamless, user-centric digital experiences. I combines technical expertise with creative problem-solving to deliver innovative, scalable solutions that drive business growth.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rophen-padonou-357995246/",
  github: "https://www.github.com/Rophpad",
  twitter: "https://x.com/rophpad",
  // instagram: "https://www.linkedin.com/in/rophen-padonou-357995246/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Designer",
    Company: `5euros.com`,
    Location: "Online",
    Type: "Freelance",
    Duration: "Sep 2021 - Dec 2022",
  },
  {
    Position: "Post-Editor",
    Company: `DataPalace`,
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2023 - Mar 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Software Engineering",
    Company: "Africa Leadership Experience",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jun 2023 - Jun 2024",
  },
  {
    Position: "FullStack Development",
    Company: `EPITECH`,
    Location: "Benin",
    Type: "Full Time",
    Duration: "Jun 2024 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "post-it",
    image: projectImage1,
    description: `This project aims to develop a web application that provide an intuitive and colorful interface
    for writtng and seeing notes. User can create, update and delete notes and can see others users notes.`,
    techstack: "Vue.js, Vite, Tailwind.css",
    previewLink: "https://postit-lemon.vercel.app/",
    githubLink: "https://github.com",
  },
  {
    title: "premoview",
    image: projectImage2,
    description: `This project aims to develop a web application similar to My Rotten Tomattoes, providing
    an intuitive interface for reviewing and getting insights about movies. User can see reviews and can review movies.`,
    techstack: "Next.js, Tailwind.css, MongoDB",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "twp",
    image: projectImage3,
    description: `This project aims to develop a web application similar to Trello, providing
    an intuitive interface for managing tasks and projects. User can authticate and create lists, cards and make drag-and-drop
    with them.`,
  techstack: "Vue.js, Tailwind, Wordpress API",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
//   {
//     title: "Project title 4",
//     image: projectImage4,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
//   {
//     title: "Project title 5",
//     image: projectImage5,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
//   {
//     title: "Project title 6",
//     image: projectImage6,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "rophen.padonou@epitech.eu",
  phone: "+229 96908483",
};
