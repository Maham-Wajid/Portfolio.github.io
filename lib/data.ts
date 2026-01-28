export const personalInfo = {
  name: "Maham Wajid",
  title: "Full-Stack Developer & UI/UX Designer",
  tagline: "Building innovative digital solutions with passion and precision",
  bio: "I'm a passionate Full-Stack Developer and UI/UX Designer with 3+ years of professional experience, specializing in creating elegant, performant, and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life through clean code, thoughtful design, and innovative problem-solving.",
  location: "Lahore, Pakistan",
  email: "maham07workmail@gmail.com",
  phone: "+92 307 1785402",
  social: {
    github: "https://github.com/Maham-Wajid",
    linkedin: "https://www.linkedin.com/in/maham-wajid/",
    upwork: "https://www.upwork.com/freelancers/mahamwajid",
    twitter: "https://twitter.com/maham07libra",
    facebook: "https://www.facebook.com/maham.wajid.33",
  },
  resumeUrl: "/resume/Maham_Wajid.pdf",
};

export const about = {
  heading: "About Me",
  subheading: "Passionate Developer, Creative Designer, Problem Solver",
  paragraphs: [
    "As a Computer Science graduate with a genuine passion for technology and innovation, I have cultivated a robust technical foundation complemented by over 3 years of hands-on professional experience. My journey in the tech industry has been marked by versatility, having successfully delivered diverse projects ranging from dynamic web applications to complex automation systems.",
    "My expertise spans the full development lifecycle - from conceptualization and UI/UX design to implementation, testing, and deployment. I'm proficient in modern frameworks like React, Next.js, and Spring Boot, with strong skills in Python, Java, and TypeScript. I believe in writing clean, maintainable code that not only works but scales beautifully.",
    "Beyond coding, I'm passionate about creating delightful user experiences. As a UI/UX designer, I approach every project with empathy, ensuring that design decisions are backed by user research and best practices. I thrive in collaborative environments and love mentoring junior developers."
  ],
  highlights: [
    {
      icon: "💼",
      title: "3+ Years Experience",
      description: "Professional software development experience"
    },
    {
      icon: "🚀",
      title: "20+ Projects",
      description: "Successfully delivered across various domains"
    },
    {
      icon: "🎨",
      title: "Full-Stack & Design",
      description: "End-to-end development and UI/UX expertise"
    },
    {
      icon: "🌟",
      title: "100% Job Success",
      description: "Perfect track record on Upwork"
    }
  ]
};

export const skills = {
  technical: [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 90 },
        { name: "jQuery", level: 80 },
        { name: "Microsoft Fluent UI", level: 85 },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Python", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "C++", level: 80 },
        { name: "PHP", level: 70 },
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "SQL", level: 90 },
        { name: "SQLAlchemy", level: 80 },
        { name: "Alembic", level: 75 },
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD", level: 75 },
      ]
    },
    {
      category: "Design & Other",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Illustrator", level: 85 },
        { name: "UI/UX Design", level: 90 },
        { name: "Responsive Design", level: 95 },
      ]
    }
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Leadership",
    "Mentoring"
  ]
};

export const experience = [
  {
    title: "Software Engineer",
    company: "Devsinc",
    location: "Lahore, Pakistan",
    period: "2022 - 2024",
    type: "Full-time",
    description: "Led full-stack development initiatives and contributed to multiple high-impact projects",
    achievements: [
      "Developed and maintained microservices-based applications using Spring Boot and FastAPI",
      "Built responsive front-end interfaces with React, TypeScript, and Microsoft Fluent UI",
      "Implemented authentication and authorization systems with JWT and OAuth2",
      "Optimized database queries and implemented caching strategies, improving performance by 40%",
      "Collaborated with cross-functional teams using Agile methodologies",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["Java", "Spring Boot", "React", "Python", "FastAPI", "PostgreSQL", "Docker", "Azure"]
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Upwork",
    location: "Remote",
    period: "2021 - Present",
    type: "Freelance",
    description: "Delivering high-quality web development and design solutions to clients worldwide",
    achievements: [
      "Maintained 100% job success score with top-rated freelancer status",
      "Completed 15+ projects across various industries and technology stacks",
      "Specialized in custom web applications, e-commerce platforms, and UI/UX design",
      "Built responsive, SEO-optimized websites using modern frameworks",
      "Provided ongoing maintenance and support for client projects"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "WordPress", "Figma", "Tailwind CSS"]
  },
  {
    title: "Summer Intern",
    company: "Qbatch",
    location: "Lahore, Pakistan",
    period: "Summer 2022",
    type: "Internship",
    description: "Gained hands-on experience in web development and project management",
    achievements: [
      "Developed a fully functional e-commerce store as final project",
      "Learned modern JavaScript frameworks and best practices",
      "Collaborated with senior developers on real-world projects",
      "Participated in code reviews and sprint planning sessions"
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"]
  }
];

export const projects = [
  {
    title: "VR-Based E-commerce Platform",
    category: "Web Development",
    description: "An innovative virtual reality-based e-commerce web application providing users with immersive 3D shopping experiences through a virtual meta mart.",
    image: "/images/project-vr.jpg",
    technologies: ["React", "Three.js", "WebGL", "Node.js", "MongoDB"],
    features: [
      "Immersive 3D shopping environment",
      "Real-time product interaction",
      "Secure payment integration",
      "User analytics dashboard"
    ],
    github: "https://github.com/Maham-Wajid/virtual-reality-based-ecommerce-web-application",
    demo: null,
  },
  {
    title: "Web Scraper & API Integration Demo",
    category: "Backend Development",
    description: "Professional demonstration of web scraping, page interaction, and API integration using TypeScript. Showcases advanced data extraction and automation capabilities.",
    image: "/images/project-scraper.jpg",
    technologies: ["TypeScript", "Node.js", "Puppeteer", "Express"],
    features: [
      "Automated data extraction",
      "API integration",
      "Dynamic content handling",
      "Error handling & logging"
    ],
    github: "https://github.com/Maham-Wajid/web-scrapper-demo",
    demo: null,
  },
  {
    title: "Machine Learning Health Prediction Suite",
    category: "Machine Learning",
    description: "Collection of ML models for health prediction including diabetes, heart disease, and rainfall prediction using various algorithms and techniques.",
    image: "/images/project-ml.jpg",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    features: [
      "Logistic Regression for diabetes prediction",
      "Heart disease risk assessment",
      "Data visualization & EDA",
      "Model evaluation metrics"
    ],
    github: "https://github.com/Maham-Wajid/diabetes-prediction",
    demo: null,
  },
  {
    title: "Book Catalog FastAPI Application",
    category: "Backend Development",
    description: "RESTful API for managing book catalogs with full CRUD operations, authentication, and data validation.",
    image: "/images/project-book.jpg",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic"],
    features: [
      "Complete CRUD operations",
      "JWT authentication",
      "Data validation with Pydantic",
      "API documentation with Swagger"
    ],
    github: "https://github.com/Maham-Wajid/book-catalog",
    demo: null,
  },
  {
    title: "Hospital Management System",
    category: "Desktop Application",
    description: "Comprehensive C# desktop application for managing hospital operations including patient records, appointments, and staff management.",
    image: "/images/project-hospital.jpg",
    technologies: ["C#", ".NET", "SQL Server", "WinForms"],
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Staff management",
      "Report generation"
    ],
    github: "https://github.com/Maham-Wajid/Hospital-management-system",
    demo: null,
  },
  {
    title: "Todo Web Application",
    category: "Web Development",
    description: "Modern todo web app built with Angular featuring a clean UI and smooth user experience.",
    image: "/images/project-todo.jpg",
    technologies: ["Angular", "TypeScript", "HTML", "CSS"],
    features: [
      "Add, edit, delete tasks",
      "Mark tasks as complete",
      "Local storage persistence",
      "Responsive design"
    ],
    github: "https://github.com/Maham-Wajid/todo-webapp.github.io",
    demo: "https://maham-wajid.github.io/todo-webapp.github.io/",
  },
  {
    title: "Hostel Management System",
    category: "Web Development",
    description: "Full-stack web application for managing hostel operations with both frontend and backend implementation.",
    image: "/images/project-hostel.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Student registration",
      "Room allocation",
      "Fee management",
      "Admin dashboard"
    ],
    github: "https://github.com/Maham-Wajid/Hostel-management-system",
    demo: null,
  },
  {
    title: "Speech to Text Application (Dicta)",
    category: "Web Development",
    description: "Real-time speech-to-text conversion app built with vanilla JavaScript utilizing Web Speech API.",
    image: "/images/project-speech.jpg",
    technologies: ["JavaScript", "HTML", "CSS", "Web Speech API"],
    features: [
      "Real-time speech recognition",
      "Multiple language support",
      "Copy to clipboard",
      "Clean, intuitive UI"
    ],
    github: "https://github.com/Maham-Wajid/dicta-speech-to-text",
    demo: null,
  }
];

export const services = [
  {
    icon: "💻",
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern frameworks like React, Next.js, Node.js, Python, and Java Spring Boot."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces with Figma and Adobe Illustrator. From wireframes to high-fidelity prototypes."
  },
  {
    icon: "📱",
    title: "Responsive Web Design",
    description: "Building mobile-first, responsive websites that look perfect on all devices using Tailwind CSS and Bootstrap."
  },
  {
    icon: "🔧",
    title: "API Development",
    description: "Designing and implementing RESTful APIs with FastAPI, Spring Boot, and Node.js, complete with documentation."
  },
  {
    icon: "🗄️",
    title: "Database Design",
    description: "Architecting efficient database schemas and optimizing queries for PostgreSQL, MySQL, and other databases."
  },
  {
    icon: "🚀",
    title: "DevOps & Deployment",
    description: "Containerization with Docker, CI/CD pipelines, and cloud deployment on Azure and other platforms."
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Management and Technology (UMT)",
    location: "Lahore, Pakistan",
    period: "2019 - 2023",
    achievements: [
      "Strong foundation in data structures, algorithms, and software engineering",
      "Completed final year project on VR-based e-commerce systems",
      "Participated in hackathons and coding competitions"
    ]
  }
];

export const testimonials = [
  {
    name: "Client Name",
    role: "CEO, Tech Company",
    image: "/images/testimonial-1.jpg",
    text: "Maham delivered exceptional work on our web application. Her attention to detail and technical expertise made the project a huge success."
  }
];
