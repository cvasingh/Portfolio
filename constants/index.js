import { frontend, backend, ux, prototyping, dcc } from "../assets";

const config = {
  name: "Shiva Singh",
  role: "Software",
  disciplines: ["Developer", "Designer"],
  url: "https://cvasingh.com",
  bluesky: "cvasingh.com",
  figma: "@cvasingh",
  github: "cvasingh",
  repo: "https://github.com/cvasingh/portfolio",
  ascii:
    "  e88'Y88 Y8b Y88888P     e Y8b     \n d888  'Y  Y8b Y888P     d8b Y8b    \nC8888       Y8b Y8P     d888b Y8b   \n Y888  ,d    Y8b Y     d888888888b  \n  \"88,d88     Y8P     d8888888b Y8b \n"
};
const services = [
  {
    title: "Frontend Developer",
    icon: frontend
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  {
    title: "Blockchain Developer",
    icon: ux
  },
  {
    title: "Software Prototyping",
    icon: prototyping
  }
];
const educations = [
  {
    title: "Dr. A. P. J. Abdul Kalam Technical University",
    company_name: "Degree Computer Seience",
    icon: dcc,
    iconBg: "#333333",
    date: "Aug 2019 - May 2023"
  },
  {
    title: "Sun Valley Public School",
    company_name: "10th and 12th Standard",
    icon: dcc,
    iconBg: "#333333",
    date: "Apr 2015 - May 2019"
  }
];

export { config, services, educations };
