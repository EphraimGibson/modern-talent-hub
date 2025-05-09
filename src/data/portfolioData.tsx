
import { 
  Code, Briefcase, BookOpen, Star, 
  Globe, Github, ExternalLink, 
  Mail, Phone, Linkedin, Twitter 
} from "lucide-react";

export const personalInfo = {
  name: "Ephraim Gibson",
  tagline: "Computer Science Student",
  email: "example@email.com", // You can update this with your actual email
  phone: "+1 (123) 456-7890", // You can update this with your actual phone
  location: "Canada",
  bio: "I am a Computer Science student with a passion for software development. With experience in Java, C++, and Python, I enjoy creating efficient solutions to complex problems. I'm constantly expanding my knowledge in software development methodologies and am eager to apply my skills in a professional environment.",
  avatar: "/placeholder.svg", // Will use placeholder for now, user can replace this
  socialLinks: [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/ephraim-gibson", 
      icon: Linkedin 
    },
    { 
      name: "GitHub", 
      url: "https://github.com/EphraimGibson", 
      icon: Github 
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/ephraim_gibson", 
      icon: Twitter 
    },
  ]
};

export const skills = [
  { 
    name: "Java", 
    level: 90, 
    icon: Code
  },
  { 
    name: "C++", 
    level: 85, 
    icon: Code 
  },
  { 
    name: "Python", 
    level: 80, 
    icon: Code 
  },
  { 
    name: "SQL", 
    level: 75, 
    icon: Code 
  },
  { 
    name: "HTML/CSS", 
    level: 70, 
    icon: Code 
  },
  { 
    name: "JavaScript", 
    level: 65, 
    icon: Code 
  },
];

export const experience = [
  {
    title: "Teaching Assistant",
    company: "Sheridan College",
    period: "2023 - Present",
    description: "Assist professors in teaching Computer Science courses, provide one-on-one tutoring to students, and grade assignments and exams. Help students understand complex programming concepts and algorithms.",
    icon: Briefcase
  },
  {
    title: "Software Development Intern",
    company: "Tech Solutions Inc.",
    period: "Summer 2022",
    description: "Developed and maintained software applications using Java and SQL. Collaborated with cross-functional teams to implement new features and fix bugs. Participated in code reviews and agile development processes.",
    icon: Briefcase
  }
];

export const education = [
  {
    institution: "Sheridan College",
    degree: "Bachelor of Computer Science",
    period: "2021 - Present",
    description: "Current GPA: 3.8/4.0. Relevant coursework includes Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering Principles.",
    icon: BookOpen
  },
  {
    institution: "Ontario High School",
    degree: "High School Diploma",
    period: "2017 - 2021",
    description: "Graduated with honors. Participated in programming competitions and coding clubs.",
    icon: BookOpen
  }
];

export const projects = [
  {
    title: "LockIn",
    description: "A secure authentication system that provides robust user authentication with features like password hashing, session management, and secure token generation. Implements security best practices to protect user data.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Java", "Security"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/EphraimGibson/LockIn",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  },
  {
    title: "CatchABall",
    description: "An interactive game where players must catch falling balls to score points. Features increasing difficulty levels, sound effects, and a high-score tracking system. Built as a demonstration of object-oriented programming concepts.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Java", "Game Development"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/EphraimGibson/CatchABall",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  },
  {
    title: "Grade Calculator GUI",
    description: "A desktop application with a graphical user interface that allows students to calculate their final grades based on assignment and exam scores. Supports weighted grade calculations and provides visual feedback on academic standing.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Java", "GUI", "Educational"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/EphraimGibson/Grade_Calculator_GUI",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  },
  {
    title: "SP Projects",
    description: "A collection of software patterns implemented in various programming languages. Demonstrates understanding of design patterns like Singleton, Factory, Observer, and more. Serves as a reference for applying these patterns in real-world scenarios.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Java", "Design Patterns", "Software Engineering"],
    liveUrl: "https://project.example.com",
    githubUrl: "https://github.com/EphraimGibson/SP-Projects",
    buttonIcons: {
      live: Globe,
      github: Github,
      details: ExternalLink
    }
  }
];

export const testimonials = [
  {
    quote: "Ephraim is a dedicated student with exceptional problem-solving skills. His ability to quickly grasp complex concepts makes him stand out among his peers.",
    author: "Dr. Sarah Johnson",
    title: "Computer Science Professor at Sheridan College"
  },
  {
    quote: "During his internship, Ephraim demonstrated great initiative and technical aptitude. He was able to contribute meaningful code to our projects within a short time.",
    author: "Michael Chen",
    title: "Lead Developer at Tech Solutions Inc"
  },
  {
    quote: "Ephraim's attention to detail and commitment to best practices in software development make him a valuable team member. His work consistently meets high standards.",
    author: "Emma Roberts",
    title: "Software Engineering Manager"
  }
];

