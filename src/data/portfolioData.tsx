
import { 
  Code, Briefcase, BookOpen, Star, 
  Globe, Github, ExternalLink, 
  Mail, Phone, Linkedin, Twitter 
} from "lucide-react";

export const personalInfo = {
  name: "John Doe",
  tagline: "Full Stack Developer & UX Enthusiast",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "I'm a passionate full-stack developer with over 5 years of experience creating elegant solutions. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding or pushing pixels, you'll find me taking photos or exploring the outdoors.",
  avatar: "/placeholder.svg", // Will use placeholder for now, user can replace this
  socialLinks: [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/johndoe", 
      icon: Linkedin 
    },
    { 
      name: "GitHub", 
      url: "https://github.com/johndoe", 
      icon: Github 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/johndoe", 
      icon: Twitter 
    },
  ]
};

export const skills = [
  { 
    name: "React", 
    level: 90, 
    icon: Code
  },
  { 
    name: "JavaScript", 
    level: 85, 
    icon: Code 
  },
  { 
    name: "TypeScript", 
    level: 75, 
    icon: Code 
  },
  { 
    name: "Node.js", 
    level: 80, 
    icon: Code 
  },
  { 
    name: "HTML/CSS", 
    level: 90, 
    icon: Code 
  },
  { 
    name: "UI/UX Design", 
    level: 70, 
    icon: Star 
  },
];

export const experience = [
  {
    title: "Senior Front End Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Lead the front-end development team in creating responsive web applications. Implemented modern React patterns and optimized performance across multiple projects.",
    icon: Briefcase
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2018 - 2021",
    description: "Developed full-stack applications using MERN stack. Collaborated with designers to implement UI/UX improvements resulting in 30% increase in user engagement.",
    icon: Briefcase
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Labs",
    period: "2016 - 2018",
    description: "Built responsive websites and implemented interactive features using JavaScript and jQuery. Assisted in transitioning legacy code to modern frameworks.",
    icon: Briefcase
  }
];

export const education = [
  {
    institution: "University of Technology",
    degree: "Master's in Computer Science",
    period: "2014 - 2016",
    description: "Specialized in Software Engineering with focus on web technologies and user interface design.",
    icon: BookOpen
  },
  {
    institution: "State College",
    degree: "Bachelor's in Computer Science",
    period: "2010 - 2014",
    description: "Graduated with honors. Completed thesis on responsive design patterns for web applications.",
    icon: BookOpen
  }
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform built with React, Node.js and MongoDB. Includes payment processing, user authentication, and admin dashboard.",
    image: "/placeholder.svg", // Will use placeholder for now
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  },
  {
    title: "Task Management Dashboard",
    description: "A Kanban-style project management tool with drag-and-drop functionality, user assignments, and real-time updates using WebSockets.",
    image: "/placeholder.svg", // Will use placeholder for now
    tags: ["React", "Redux", "Socket.io", "Express"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/johndoe/taskmanager",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  },
  {
    title: "Weather Forecast App",
    description: "A beautiful weather application that provides real-time forecasts, location-based data, and interactive maps using multiple weather APIs.",
    image: "/placeholder.svg", // Will use placeholder for now
    tags: ["React", "TypeScript", "APIs", "Styled Components"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/johndoe/weatherapp",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  },
  {
    title: "Social Media Analytics Tool",
    description: "An analytics dashboard that helps marketing teams visualize and interpret social media performance data across multiple platforms.",
    image: "/placeholder.svg", // Will use placeholder for now
    tags: ["React", "D3.js", "Node.js", "Firebase"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/johndoe/analytics",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  }
];

export const testimonials = [
  {
    quote: "John is one of the most talented developers I've worked with. His attention to detail and problem-solving skills are exceptional.",
    author: "Sarah Johnson",
    title: "Product Manager at Tech Solutions"
  },
  {
    quote: "Working with John was a pleasure. He delivered our project ahead of schedule and exceeded our expectations in terms of quality and functionality.",
    author: "Michael Chen",
    title: "CEO at StartUp Labs"
  },
  {
    quote: "John's technical expertise combined with his eye for design makes him a uniquely valuable asset for any development team.",
    author: "Emma Roberts",
    title: "Design Director at Digital Innovations"
  }
];
