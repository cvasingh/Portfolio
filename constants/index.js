import {
  frontend,
  backend,
  ux,
  prototyping,
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
  coverhunt,
  dcc,
  kelhel,
  microverse,
  Arthur,
  McKenzie,
  Raza,
  David,
  Appala,
  Mallie,
  Jed
} from "../assets";

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
const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "Rails",
    icon: rubyrails
  },
  {
    name: "graphql",
    icon: graphql
  },
  {
    name: "postgresql",
    icon: postgresql
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "figma",
    icon: figma
  },
  {
    name: "docker",
    icon: docker
  }
];

const projects = [
  {
    id: "project-1",
    name: "AppStudio",
    description:
      "Canada’s best minds under one roof. The architects of a digital tomorrow, united under the banner of AppStudio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: komikult,
    demo: "https://www.appstudio.ca/"
  },
  {
    id: "project-2",
    name: "Sports Betting",
    description: "It is a sports betting site where various players can compete against each other.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: leaderboard,
    demo: "https://sportsbet.io"
  },
  {
    id: "project-3",
    name: "Live Betting",
    description: "It is a live sports betting site where various players can compete against each other.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "supabase",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: math,
    demo: "https://www.livebet.com/"
  },
  {
    id: "project-4",
    name: "Toyota",
    description: `Call Booking Website`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "supabase",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: movie,
    demo: "https://www.toyota.com"
  },
  {
    id: "project-5",
    name: "venice ai",
    description: "This is a AI Chat Platform.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "supabase",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: nyeusi,
    demo: "https://venice.ai/"
  }
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Univest.in",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Aug 2022 - July 2025"
  },
  {
    title: "Full-stack Developer",
    company_name: "HexaHash Technologies",
    icon: microverse,
    iconBg: "#333333",
    date: "Mar 2022 - Sep 2022"
  },
  {
    title: "Frontend Web Developer",
    company_name: "Skillark Pvt Ltd ",
    icon: kelhel,
    iconBg: "#333333",
    date: "Jan 2022 - Apr 2022"
  },
  {
    title: "Frontend Web Developer",
    company_name: "The Sparks Foundation",
    icon: kelhel,
    iconBg: "#333333",
    date: "Jun 2021 - Jul 2021"
  }
];

export { config, services, educations, technologies, projects, experiences };
