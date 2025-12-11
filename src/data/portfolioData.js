export const personalInfo = {
  name: "Akshat Joshi",
  title: "Full Stack Software Engineer",
  location: "Tokyo, Japan",
  visa: "Japan Work Visa valid until 25-08-2027",
  introduction: "I am a Full Stack Software Engineer with experience in developing web applications using Java, Angular, and AWS. Currently based in Tokyo, Japan, Currently, working at Rakuten Group in the payments gateway department as Senior Software Engineer (Design Lead).",
  profileImage: process.env.PUBLIC_URL + "/assets/images/profile.png"
};

export const skills = {
  languages: ["Java", "TypeScript", "Python", "C++"],
  frameworks: ["SpringBoot", "React", "Angular", "Django"],
  databases: {
    nosql: ["DynamoDB", "Redis"],
    rdbms: ["MySQL", "PostgreSQL"]
  },
  cloudDevOps: {
    cloud: "AWS (Lambda, ECS, S3, Route53, CloudFront)",
    cicd: "Git Actions"
  },
  testing: ["PyTest", "JMeter", "Cypress", "BrowserStack"],
  monitoring: ["AWS CloudWatch", "Datadog"],
  AI: ["Google ADK (agent development kit)"]
  ,
  systemDesign: ["Scalability", "Microservices", "Event-driven Architecture", "API Design"]
};

export const experience = [
  {
    company: "Rakuten Group",
    location: "Tokyo, Japan",
    duration: "May 2025 - Present",
    role: "Senior Software Engineer (Design Lead)",
    linkedinUrl: "https://www.linkedin.com/company/rakuten",
    websiteUrl: "https://global.rakuten.com/corp/",
    logo: process.env.PUBLIC_URL + "/assets/images/companies/rakuten-logo.png",
    projects: [
      {
        title: "Payment Gateway System",
        technologies: ["AWS", "Java/Spring", "Python", "Aurora MySQL"],
        achievements: [
          "Functioned as Scrum Master for a 3-member Payment Gateway Core team, responsible for facilitating agile, tracking team velocity, and managing stakeholder communications.",
          "Designed and implemented auto-cancel batch functionality for Rakuten Card's Barcode and QR payments.",
          "Responsible for developing design and release roadmap documentation for new features, and updating architecture diagrams and technical documents to incorporate recent, previously undocumented codebase changes.",
          "Upgraded cipher suite from AES/CBC to AES/GCM and rotated AES keys per NIST guidelines.",
          "Built a POC for QA AI tool to auto-generate test cases from Excel specs into Karate feature files (built with Rakuten's LLM)."
        ]
      }
    ]
  },
  {
    company: "TakeMe k.k.",
    location: "Tokyo, Japan",
    duration: "Aug 2022 - May 2025",
    role: "Full Stack Software Engineer (A2 Level)",
    linkedinUrl: "https://jp.linkedin.com/company/takemek",
    websiteUrl: "https://www.takeme.com/",
    logo: process.env.PUBLIC_URL + "/assets/images/companies/takeme-logo.png",
    projects: [
      {
        title: "Restaurant Booking System: TakeMe Concierge",
        technologies: ["Java/SpringBoot", "Python", "TypeScript/Angular 16", "Tailwind", "AWS"],
        achievements: [
          "Lead engineer for a B2C Booking System developed from scratch using Angular 16 and Tailwind, ensuring cross-browser compatibility with support for iOS 13+, Android 10+, and BrowserStack testing.",
          "Developed an end-to-end invoice generation system, ensuring compliance by securely storing invoices for 10 years in AWS S3.",
          "Optimized images by generating multiple image resolutions using AWS Lambda running on Python, resulting in faster page load. MVP/POC: In 3 months, Production release: 5 months. GMV after 12 months: 12 Million Yen/month."
        ]
      },
      {
        title: "Docomo (d払い) Pay Integration: TakeMe Pay",
        technologies: ["TypeScript/React", "Java/SpringBoot"],
        achievements: [
          "Integrated and maintained Docomo Pay APIs, contributing 5.2% of platform revenue.",
          "Reviewed and interpreted Japanese documentation for API integration."
        ]
      }
    ]
  },
  {
    company: "Delhivery Ltd.",
    location: "India",
    duration: "Jan 2020 - Aug 2022",
    role: "Senior Software Engineer",
    linkedinUrl: "https://in.linkedin.com/company/delhivery",
    websiteUrl: "https://www.delhivery.com/",
    logo: process.env.PUBLIC_URL + "/assets/images/companies/delhivery-logo.png",
    roles: [
      {
        title: "Senior Software Engineer",
        duration: "Apr 2022 - Aug 2022"
      },
      {
        title: "Software Engineer",
        duration: "Jun 2020 - Mar 2022"
      },
      {
        title: "Intern (SDE)",
        duration: "Jan 2020 - Mar 2020"
      }
    ],
    projects: [
      {
        title: "Last Mile Delivery Service: RETURNS Microservice",
        technologies: ["Python/Django 2.2", "Pytest", "Angular 4", "Postgres", "AWS"],
        achievements: [
          "As a lead Engineer, managed a team of 2 engineers, prepared UML diagrams and AWS architecture diagrams, delivered knowledge transfer sessions, and coordinated with product managers for feature enhancements.",
          "Scaled a warehouse dispatch microservice to handle 4x higher data loads using event-driven architecture.",
          "Improved API performance by 70% using optimized SQL queries.",
          "Developed an OTP-verified delivery system supporting electronic proof of delivery documents.",
          "Load Testing API on JMeter supporting 5x load and unit testing done via Pytest."
        ]
      },
      {
        title: "Virtual Number Calling System: CALL MASKING",
        technologies: ["Python/Django", "Pytest", "Redis", "AWS"],
        achievements: [
          "Implemented a fault-tolerant system for secure, private calls using virtual numbers, ensuring data privacy and compliance.",
          "Designed a PIN-based number management system that dynamically allocates virtual numbers, reducing call failures.",
          "Increased fault tolerance using a fallback mechanism to handle calling errors by switching to another third-party carrier, leveraging Redis caching and pipelines, resulting in an 85% improvement in connection rate."
        ]
      },
      {
        title: "Platform Team",
        technologies: ["Python", "Node.js", "AWS"],
        achievements: [
          "Learned about AWS resources, serverless architecture and event-driven architecture.",
          "Implemented basic payment status check web pages for Payments Microservice team using Node.js and Python."
        ]
      }
    ]
  }
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "LNM Institute of Information Technology, Jaipur, India",
  duration: "2016 - 2020"
};

export const certifications = [
  {
    category: "LinkedIn Certifications",
    description: [
      "2 Java Certifications",
      "2 Database Certifications",
      "1 Python Certification"
    ]
  },
  {
    category: "Competitive Programming (C++)",
    platform: "GeeksforGeeks",
    description: "4 Articles & 2 Improvements/Collaborations",
    profileLink: "https://auth.geeksforgeeks.org/user/cr7_bullet/articles?utm_source=geeksforgeeks&utm_medium=article_author&utm_campaign=auth_user#",
    profileName: "cr7-bullet"
  }
];

export const interests = [
  "🚴‍♂️ Cycling",
  "💻 Exploring new programming languages and frameworks",
  "📚 Reading technical articles and books",
];

export const contact = {
  email: "joshiakshat1998@gmail.com",
  linkedin: "https://linkedin.com/in/akshat-joshi-075093127",
  github: "https://github.com/akshat98"
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications & Publications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];
