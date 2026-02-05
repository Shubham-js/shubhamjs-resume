export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description?: string[];
  achievements?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const portfolioData = {
  name: "Your Name",
  title: "Software Developer",
  bio: "Passionate software developer with expertise in building modern web applications. I love creating efficient, scalable solutions and continuously learning new technologies.",
  email: "your.email@example.com",
  location: "Your Location",
  resumeUrl: "", // Add your Google Drive link here (e.g., "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing")
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter"
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: "email"
    }
  ] as SocialLink[],

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "AWS"
  ],

  experiences: [
    {
      id: 1,
      company: "Tech Company Inc.",
      position: "Senior Software Developer",
      duration: "2022 - Present",
      description: [
        "Developed and maintained scalable web applications using React and Node.js",
        "Led a team of 3 developers in building a customer-facing dashboard",
        "Improved application performance by 40% through code optimization",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
    },
    {
      id: 2,
      company: "Startup XYZ",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: [
        "Built RESTful APIs and microservices using Node.js and Express",
        "Implemented responsive UI components using React and Tailwind CSS",
        "Managed database schemas and optimized queries for better performance",
        "Participated in code reviews and maintained coding standards"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"]
    }
  ] as Experience[],

  education: [
    {
      id: 1,
      institution: "University Name",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      duration: "2016 - 2020",
      description: [
        "Focused on software engineering, algorithms, and data structures",
        "Completed coursework in web development, database systems, and software architecture"
      ],
      achievements: [
        "Graduated with Honors (GPA: 3.8/4.0)",
        "Dean's List for 3 consecutive semesters",
        "Final Year Project: Awarded Best Project"
      ]
    },
    {
      id: 2,
      institution: "High School Name",
      degree: "High School Diploma",
      field: "Science",
      duration: "2014 - 2016",
      achievements: [
        "Graduated with Distinction"
      ]
    }
  ] as Education[],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Built with modern technologies for scalability and performance.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      githubUrl: "https://github.com/yourusername/taskmanager",
      liveUrl: "https://taskmanager-demo.vercel.app"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather, forecasts, and weather maps. Features location-based search and favorite locations.",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/yourusername/weather-app",
      liveUrl: "https://weather-dashboard.vercel.app"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, syntax highlighting, and SEO optimization. Includes admin panel for content management.",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/blog-platform",
      liveUrl: "https://blog-platform.vercel.app"
    }
  ] as Project[]
};
