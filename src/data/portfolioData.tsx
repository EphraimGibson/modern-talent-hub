
import { 
  Code, Briefcase, BookOpen, Star, 
  Globe, Github, ExternalLink, 
  Mail, Phone, Linkedin, Twitter 
} from "lucide-react";

export const personalInfo = {
  name: "Ephraim Gibson",
  tagline: "Computer Science Student",
  email: "mrgibs97@gmail.com",
  phone: "+37062132945",
  location: "Vilnius, Lithuania",
  bio: "I am a driven Computer Science student, working towards becoming a full-stack developer. I enjoy creating efficient solutions to complex problems and have hands-on experience with Java, C++, and React. I'm always learning and improving my skills, and my strong dedication to growth helps me adapt quickly and contribute value to any team.",
  avatar: "/picture.svg", 
  socialLinks: [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/ephraimgibson", 
      icon: Linkedin 
    },
    { 
      name: "GitHub", 
      url: "https://github.com/EphraimGibson", 
      icon: Github 
    },
    { 
      name: "Twitter", 
      url: "https://x.com/90s_remy", 
      icon: Twitter 
    },
  ]
};

export const skills = [
  { 
    name: "React", 
    level: 70, 
    icon: Code
  },
  { 
    name: "JavaScript", 
    level: 75, 
    icon: Code 
  },
  { 
    name: "C++", 
    level: 75, 
    icon: Code 
  },
  { 
    name: "Node.js", 
    level: 90, 
    icon: Code 
  },
  { 
    name: "HTML/CSS", 
    level: 85, 
    icon: Code 
  },
  { 
    name: "Java", 
    level: 90, 
    icon: Star 
  },
];

export const experience = [
  {
    title: "Customer service representative ",
    company: "Teleperformance LT",
    period: "2024 - 2025",
    description: "Delivered effective solutions for technical issues on the Booking.com Extranet platform, handled special requests, and efficiently resolved host complaints.",
    icon: Briefcase
  }
];

export const education = [
  {
    institution: "Vilniaus Verslo Kolegija",
    degree: "Bachelor's in Computer Science",
    period: "2023 - 2026",
    description: "Specialized in Software Engineering with focus on internet technologies and programming.",
    icon: BookOpen
  }
];

export const projects = [
  {
    title: "Task Management Application",
    description: "A cross-platform mobile application for Android and iOS designed to manage daily tasks efficiently. It features a countdown timer, an intelligent algorithm that prioritizes tasks, and recommends an ideal task list for each day. The app includes user authentication and ensures that user data is securely stored and synced across multiple devices.",
    image: "/placeholder.svg", // Will use placeholder for now
    tags: ["React Native", "Express", "Node.js", "Security", "PostgreSQL", "Docker", "JavaScript", "REST API", "APIs"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/EphraimGibson/LockIn",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  },
  {
    title: "Grade Calculator App",
    description: "A Windows Forms desktop application built with C++/CLR under the .NET Framework. Designed to streamline student grade management, it allows users to calculate final grades based on assignment and exam scores, supports weighted calculations, and provides visual feedback on academic standing. The application features a smart algorithm that can compute grades using either the median or the average, allowing for easy switching between calculation methods. It also includes a built-in text editor for writing, opening, and saving documents, along with an MSI setup file for easy installation.",
    image: "/placeholder.svg", // Will use placeholder for now
    tags: ["C++/CLR", ".Net Framework"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/EphraimGibson/Grade_Calculator_GUI",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  },
  {
    title: "Tap & Dash Game",
    description: "An interactive game where players catch disappearing balls to score points, featuring increasing difficulty, sound effects, and a high-score tracker. Built with MIT App Inventor to demonstrate multimedia capabilities on smart devices, the game includes user authentication and cross-device data persistence, showcasing practical knowledge of MySQL and API integration. PHP scripts were used to connect the app with the database, handling data exchange between the client and server.",
    image: "/placeholder.svg", // Will use placeholder for now
    tags: ["Security", "PHP", "APIs", "MySQL"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/EphraimGibson/CatchABall",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  }
];

export const testimonials = [
  {
    quote: "Worked with Ephraim for 11 months. He is motivated, fast learner and is quick to absorb all technical information needed to assist clients. Actively participated in teams meetings, outings and celebrations, was a valuable team member. Let with great results and performed till the last day with high regard to team, clients and position.",
    author: "Daiva Marčiukaitytė",
    title: "Team Manager at Teleperformance"
  },
  {
    quote: "Collaborating with Ephraim was a great experience. He completed his part of the project ahead of schedule and surpassed our expectations in both quality and functionality.",
    author: "Fady Dkhil ",
    title: "Teammate at VVK"
  }
];

