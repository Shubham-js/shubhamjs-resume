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

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export const portfolioData = {
  name: "Shubham Jain",
  title: "Software Engineer",
  bio: "Passionate software developer with expertise in building modern web applications. I love creating efficient, scalable solutions and continuously learning new technologies.",
  email: "shubhamcomputer33@gmail.com",
  location: "Noida, Uttar Pradesh, India",
  resumeUrl: "https://drive.google.com/file/d/1TLaB9zc55DJrmsXJLS8F8LzJ2es5lcNy/view?usp=sharing",
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Shubham-js",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham-js/",
      icon: "linkedin"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/shubham-js/",
      icon: "leetcode"
    },
    {
      name: "Email",
      url: "mailto:shubhamcomputer33@gmail.com",
      icon: "email"
    }
  ] as SocialLink[],

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "Git",
    "C++",
    "Java",
    "Python",
    "HTML/CSS",
    "MYSQL",
    "MongoDB",
    "Docker",
  ],

  experiences: [
    {
      id: 1,
      company: "Innovaccer",
      position: "Software Development Engineer",
      duration: "October 2024 - Present",
      description: [
        "Developed and maintained scalable web applications using React and Node.js",
        "Led a team of 3 developers in building a customer-facing dashboard",
        "Improved application performance by 40% through code optimization",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "Node", "Python", "TypeScript", "MYSQL", "MongoDB"]
    },
    {
      id: 2,
      company: "Makemytrip",
      position: "Senior Software Engineer 1",
      duration: "July 2022 - October 2024",
      location: "Gurugram, Haryana, India",
      description: [
        "Pioneered the development of the Seat Availability Feature, revolutionizing the booking experience across Web Platforms and Apps, resulting in an outstanding 13.5% increase ininteractions.",
        "Migrated the trains home, trains listing, traveller booking review page across web platforms and Apps.",
        "Implemented thestation, nearby station and train auto suggest elevating user convenience and navigation to unprecedented levels.",
        "Added Bus interlinking of cities between source and destination in trains SEO Pages which increased bus bookings by 5%.",
        "Created various Rails Information Services like Live Trains Status, Train Schedule and Platform Locator Service for Apps which helped in increase of traffic by 12%.",
        "Worked on SEO Imporvement like Train Route Pages, Train Detail Pages, Train Type Pages for Goibibo Web Platforms which helped in increasing the traffic by 8%.",
        "Built RESTful APIs solutions that served data to the React front-end-based UI on dynamically chosen user inputs that handled over 1,00,000+ daily concurrent user requests.",
        "Designed different modules, features, and go-routines for large-scale Go-ibibo Rails applications, improving the management and reusability of code by 45%.",
      ],
      technologies: ["Next","React", "Node", "React Native", "Typescript"]
    },
    {
      id: 3,
      company: "Zunroof",
      position: "Software Development Engineer",
      duration: "August 2021 - July 2022",
      location: "Gurugram, Haryana, India",
      description: [
        "Spearheaded the deployment of innovative smart solutions, including EV Charger systems and Next-Gen Smart Locks, driving a significant 10% increase in user engagement and satisfaction for the Zunpulse app.",
        "Designed the Repeat Sales Feature, resulting in a notable 5% rise in recurring revenue and customer retention, demonstrating a keen focus on enhancing app functionality and user experience.",
        "Optimized the Notification System, achieving a 15% improvement in delivery accuracy and user responsiveness, ensuring timely and relevant communication with app users",
        "Developed seamless automation solutions for smart devices, streamlining operations and enhancing user convenience and increase in app usage.",
        "Led the integration of Alexa and Google Assistant Skills, expanding the app’s accessibility to voice-controlled platforms, and increasing user engagement by 7.5%, showcasing versatility in technology integration and user interaction enhancement.",
      ],
      technologies: ["Node", "GCP", "React", "TypeScript", "MYSQL", "MongoDB"]
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
  ] as Project[],

  blogPosts: [
    {
      id: 1,
      title: "The Future of Web Development: React Server Components",
      excerpt: "Exploring how React Server Components are revolutionizing the way we build modern web applications and improving performance.",
      content: "React Server Components represent a paradigm shift in web development...",
      author: "Your Name",
      date: "2024-01-15",
      category: "Web Development",
      tags: ["React", "Next.js", "Performance", "Server Components"],
      readTime: 5
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js and TypeScript",
      excerpt: "Learn how to create robust, type-safe APIs that can handle millions of requests using Node.js and TypeScript.",
      content: "Building scalable APIs requires careful architecture and design...",
      author: "Your Name",
      date: "2024-01-10",
      category: "Backend",
      tags: ["Node.js", "TypeScript", "API", "Scalability"],
      readTime: 8
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox for Modern Layouts",
      excerpt: "A comprehensive guide to creating responsive, modern layouts using CSS Grid and Flexbox techniques.",
      content: "CSS Grid and Flexbox have transformed how we approach layouts...",
      author: "Your Name",
      date: "2024-01-05",
      category: "Frontend",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      readTime: 6
    },
    {
      id: 4,
      title: "AI Integration in Web Applications: A Practical Guide",
      excerpt: "Discover how to integrate AI capabilities into your web applications using modern APIs and frameworks.",
      content: "Artificial Intelligence is becoming increasingly accessible...",
      author: "Your Name",
      date: "2023-12-28",
      category: "AI/ML",
      tags: ["AI", "Machine Learning", "Web Development", "APIs"],
      readTime: 10
    },
    {
      id: 5,
      title: "Optimizing Performance: From Zero to Hero",
      excerpt: "Practical strategies and techniques to optimize your web applications for speed and efficiency.",
      content: "Performance optimization is crucial for user experience...",
      author: "Your Name",
      date: "2023-12-20",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web Vitals", "Best Practices"],
      readTime: 7
    },
    {
      id: 6,
      title: "The Rise of Edge Computing in Modern Applications",
      excerpt: "Understanding how edge computing is changing the landscape of web application deployment and delivery.",
      content: "Edge computing brings computation closer to users...",
      author: "Your Name",
      date: "2023-12-15",
      category: "DevOps",
      tags: ["Edge Computing", "CDN", "Deployment", "Infrastructure"],
      readTime: 9
    }
  ] as BlogPost[],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Innovations Inc.",
      content: "Working with this developer was an absolute pleasure. They delivered a high-quality product on time and exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Exceptional developer who brings innovative solutions to complex problems. Their code is clean, well-documented, and maintainable. I would highly recommend them for any technical project.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Agency",
      content: "A true professional who understands both technical and design aspects. They transformed our vision into a beautiful, functional application. The collaboration was seamless and productive.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder",
      company: "Digital Solutions",
      content: "Outstanding work ethic and technical skills. They consistently deliver beyond expectations and are always willing to go the extra mile. A valuable asset to any development team.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Engineering Manager",
      company: "CloudTech",
      content: "One of the best developers I've worked with. Their ability to solve complex problems and communicate effectively makes them stand out. The project was completed flawlessly.",
      rating: 5
    }
  ] as Testimonial[]
};
