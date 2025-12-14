export const personalInfo = {
  name: "Akshat Joshi",
  title: "Full Stack Software Engineer",
  location: "Tokyo, Japan",
  visa: "Japan Work Visa valid until 25-08-2027",
  introduction: "I am a Full Stack Software Engineer with experience in developing web applications using Java, Angular, and AWS. Currently based in Tokyo, Japan, Currently, working at Rakuten Group in the payments gateway department as Senior Software Engineer (Design Lead).",
  profileImage: process.env.PUBLIC_URL + "/assets/images/profile.png"
};

export const skills = {
  languages: ["Java", "TypeScript", "Python", "C++", "GO"],
  frameworks: ["SpringBoot", "Django", "Angular", "React"],
  databases: {
    nosql: ["DynamoDB", "Redis"],
    rdbms: ["MySQL", "PostgreSQL"]
  },
  cloudDevOps: {
    cloud: "AWS",
    cicd: "Github Actions, Jenkins"
  },
  messagingQueue: ["Kafka", "SQS", "DynamoStreams"],
  testing: ["PyTest", "JMeter", "Cypress", "Celery"],
  monitoring: ["Datadog"],
  AI: ["GoogleADK"],
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
        technologies: ["RAG Agent", "AWS", "Spring", "Python", "Aurora MySQL", "Jenkins"],
        achievements: [
          "Built RAG agent for QAs that converts Test specs documents into automated test payloads using Rakuten LLM + Google ADK",
          "Designed and implemented auto-cancel batch functionality from scratch for Rakuten Card's Barcode and QR payment methods.",
          "Upgraded cipher suite from AES/CBC to AES/GCM and rotated AES keys per NIST guidelines and PCI DSS compliance.",
          "Improved CI/CD Pipeline, by upgrading OWASP Dependency check to 12.x.x and by resolving critical vulnerabilities from Dependency Check and PMD, and worked with security team for the codebase vulnerability mitigation guidelines"
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
        title: "Docomo (d払い) Pay Integration: TakeMe Pay",
        technologies: ["AWS", "React", "SpringBoot", "GO"],
        achievements: [
          "Integrated Docomo Pay APIs into gateway, contributing to 5.2% of platform revenue. Interpreted Japanese Docomo API documentation."
        ]
      },
      {
        title: "Restaurant Booking System: TakeMe Concierge",
        technologies: ["AWS", "Angular 16", "Tailwind", "SpringBoot", "Thyme leaf"],
        achievements: [
          "Build the frontend for a B2C booking system from scratch with cross-browser compatibility for IOS11+ and Android 8+. MVP/POC: In 3months, Production release: 5months. GMV after 12months: 12Million Yen / month",
          "Developed an invoice generation system using thymeleaf, springboot, storing and private retrieval from S3 via API servers and not CDN.",
          "Improved Core Web Vitals (LCP) by implementing AWS Lambda (Go) for multi-resolution image generation and skeleton loading."
        ]
      }
    ]
  },
  {
    company: "Delhivery Ltd.",
    location: "India",
    duration: "Jun 2020 - Aug 2022",
    role: "Senior Software Engineer",
    linkedinUrl: "https://in.linkedin.com/company/delhivery",
    websiteUrl: "https://www.delhivery.com/",
    logo: process.env.PUBLIC_URL + "/assets/images/companies/delhivery-logo.png",
    projects: [
      {
        title: "Last Mile Delivery: RETURNS Microservice",
        technologies: ["Django", "Postgres", "AWS", "Kafka", "GO", "DynamoStreams"],
        achievements: [
          "Scaled service to handle 4x data load by Improving warehouse dispatch and package scan APIs performance by 70% using optimized SQL queries, parallel processing and reducing redundant meta data in Database by 30%.",
          "Served as SinglePointOfContact for RETURNS, created UML and AWS architecture diagrams.Implemented POC in GO, to demonstrate materially higher throughput, faster lambda cold starts, using Go 1.x over Django on AWS Lambda for scan-processing workloads.",
          "Developed an OTP-verified delivery system supporting electronic proof of delivery documents for audit."
        ]
      },
      {
        title: "Virtual Number Calling System: CALL MASKING",
        technologies: ["GO", "Redis", "AWS"],
        achievements: [
          "Developed secure, private calls using virtual numbers.",
          "Implemented fallback logic using Redis pipelines, boosting call connection rate by 85%."
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
    category: "Publications",
    platform: "GeeksforGeeks",
    description: "4 Articles, 2 Collaborations: C++ Competitive Programming",
    profileLink: "https://auth.geeksforgeeks.org/user/cr7_bullet/articles?utm_source=geeksforgeeks&utm_medium=article_author&utm_campaign=auth_user#",
    profileName: "cr7-bullet"
  },
  {
    category: "Certifications",
    description: "5 Certifications (SQL, JAVA, Python)",
    link: "link"
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
