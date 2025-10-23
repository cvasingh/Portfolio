// Personal Information
export const personalInfo = {
    name: "Shiva Singh",
    title: "Full Stack Developer",
    subtitle: "React • Node.js • UI/UX",
    email: "hello@shivasingh.dev",
    phone: "+91 (123) 456-7890",
    location: "New Delhi, India",
    bio: "Passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. I specialize in React, Node.js, and modern web technologies.",
    resume: "/resume.pdf",
    image: "/dp.png"
};

// Navigation Links
export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
];

// Social Links
export const socialLinks = {
    github: "https://github.com/cvasingh",
    linkedin: "https://linkedin.com/in/cvasingh",
    twitter: "https://twitter.com/cvasingh",
    instagram: "https://instagram.com/cvasingh",
    email: "mailto:hello@shivasingh.dev"
};

// Hero Stats
export const heroStats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Technologies" }
];

// Technologies
export const technologies = [
    {
        category: "Frontend",
        skills: [
            { name: "React", level: 95, icon: "⚛️" },
            { name: "Next.js", level: 90, icon: "🔺" },
            { name: "TypeScript", level: 85, icon: "🔷" },
            { name: "Tailwind CSS", level: 92, icon: "🎨" },
            { name: "Framer Motion", level: 80, icon: "🎬" }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", level: 88, icon: "🟢" },
            { name: "Express.js", level: 85, icon: "🚀" },
            { name: "MongoDB", level: 82, icon: "🍃" },
            { name: "PostgreSQL", level: 78, icon: "🐘" },
            { name: "Firebase", level: 80, icon: "🔥" }
        ]
    },
    {
        category: "Tools & Others",
        skills: [
            { name: "Git", level: 90, icon: "📚" },
            { name: "Docker", level: 75, icon: "🐳" },
            { name: "AWS", level: 70, icon: "☁️" },
            { name: "Figma", level: 85, icon: "🎭" },
            { name: "Three.js", level: 72, icon: "🎯" }
        ]
    }
];

// Projects
export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
        image: "/projects/ecommerce.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        category: "Full Stack",
        github: "https://github.com/cvasingh/ecommerce",
        live: "https://ecommerce-demo.vercel.app",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/projects/taskapp.jpg",
        technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "Framer Motion"],
        category: "Web App",
        github: "https://github.com/cvasingh/taskapp",
        live: "https://taskapp-demo.vercel.app",
        featured: true
    },
    {
        id: 3,
        title: "AI Chat Interface",
        description: "An intelligent chat interface powered by OpenAI API with context awareness, message history, and customizable personalities.",
        image: "/projects/aichat.jpg",
        technologies: ["React", "OpenAI API", "Firebase", "TypeScript", "Tailwind CSS"],
        category: "AI/ML",
        github: "https://github.com/cvasingh/ai-chat",
        live: "https://ai-chat-demo.vercel.app",
        featured: true
    },
    {
        id: 4,
        title: "Weather Dashboard",
        description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and data visualizations.",
        image: "/projects/weather.jpg",
        technologies: ["Vue.js", "D3.js", "Weather API", "SCSS", "Chart.js"],
        category: "Web App",
        github: "https://github.com/cvasingh/weather-dashboard",
        live: "https://weather-dashboard-demo.vercel.app",
        featured: false
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with Next.js and Three.js featuring smooth animations and 3D elements.",
        image: "/projects/portfolio.jpg",
        technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
        category: "Frontend",
        github: "https://github.com/cvasingh/portfolio",
        live: "https://shivasingh.dev",
        featured: false
    },
    {
        id: 6,
        title: "Fitness Tracker",
        description: "A comprehensive fitness tracking application with workout plans, progress tracking, and social features.",
        image: "/projects/fitness.jpg",
        technologies: ["React Native", "Firebase", "Redux", "Charts", "Push Notifications"],
        category: "Mobile",
        github: "https://github.com/cvasingh/fitness-tracker",
        live: "https://apps.apple.com/fitness-tracker",
        featured: false
    }
];

// Experience
export const experience = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        location: "New Delhi, India",
        type: "Full-time",
        startDate: "Jan 2022",
        endDate: "Present",
        description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
        achievements: [
            "Led a team of 5 developers in building a customer portal that increased user engagement by 40%",
            "Implemented CI/CD pipelines that reduced deployment time by 60%",
            "Architected microservices that handle 100k+ daily active users"
        ],
        technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "StartupHub",
        location: "Bangalore, India",
        type: "Full-time",
        startDate: "Jun 2020",
        endDate: "Dec 2021",
        description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and user-friendly interfaces.",
        achievements: [
            "Built 15+ client projects with 99% client satisfaction rate",
            "Reduced page load times by 50% through optimization techniques",
            "Integrated payment gateways and third-party APIs for various clients"
        ],
        technologies: ["React", "Vue.js", "Express.js", "MongoDB", "Stripe"]
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "WebSolutions Inc",
        location: "Mumbai, India",
        type: "Full-time",
        startDate: "Aug 2019",
        endDate: "May 2020",
        description: "Focused on creating responsive web applications and improving user experience. Worked closely with UX designers to implement pixel-perfect designs.",
        achievements: [
            "Converted 20+ PSD designs to responsive React components",
            "Improved website accessibility scores from 60% to 95%",
            "Implemented SEO best practices increasing organic traffic by 30%"
        ],
        technologies: ["React", "JavaScript", "SCSS", "Webpack", "Jest"]
    }
];

// Education
export const education = [
    {
        id: 1,
        degree: "Bachelor of Technology",
        field: "Computer Science Engineering",
        school: "Delhi Technological University",
        location: "New Delhi, India",
        startDate: "2015",
        endDate: "2019",
        gpa: "8.2/10",
        description: "Focused on software engineering, data structures, algorithms, and web technologies. Completed capstone project on machine learning applications.",
        achievements: [
            "Dean's List for 3 consecutive semesters",
            "Led the Web Development Club",
            "Won 2nd place in Inter-College Hackathon"
        ]
    },
    {
        id: 2,
        degree: "Full Stack Web Development",
        field: "Certification Program",
        school: "FreeCodeCamp",
        location: "Online",
        startDate: "2018",
        endDate: "2019",
        description: "Comprehensive program covering HTML, CSS, JavaScript, React, Node.js, and database management.",
        achievements: [
            "Completed 300+ coding challenges",
            "Built 5 full-stack projects",
            "Earned 6 professional certifications"
        ]
    }
];

// Fun Facts
export const funFacts = [
    { icon: "☕", text: "500+ cups of coffee consumed this year" },
    { icon: "🎵", text: "Code best with lo-fi music playing" },
    { icon: "🌙", text: "Night owl - most productive after 10 PM" },
    { icon: "📚", text: "Currently reading 'Clean Architecture'" },
    { icon: "🎮", text: "Gamer in free time - currently playing Cyberpunk 2077" },
    { icon: "🚀", text: "Space enthusiast - fascinated by SpaceX missions" }
];

// Contact Information
export const contactInfo = [
    {
        icon: "📧",
        title: "Email",
        value: "hello@shivasingh.dev",
        link: "mailto:hello@shivasingh.dev"
    },
    {
        icon: "📱",
        title: "Phone",
        value: "+91 (123) 456-7890",
        link: "tel:+911234567890"
    },
    {
        icon: "📍",
        title: "Location",
        value: "New Delhi, India",
        link: "https://maps.google.com"
    },
    {
        icon: "💼",
        title: "LinkedIn",
        value: "linkedin.com/in/cvasingh",
        link: "https://linkedin.com/in/cvasingh"
    }
];