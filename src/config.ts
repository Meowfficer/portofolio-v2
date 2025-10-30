export const siteConfig = {
  name: "Alandra Ravi",
  title: "Full Stack Developer",
  description: "Portfolio website of Alandra Ravi",
  accentColor: "#1d4ed8",
  social: {
    email: "alandraravi70@gmail.com",
    linkedin: "https://linkedin.com/in/alandraravi",
    twitter: "",
    instagram: "https://www.instagram.com/alandraravi",
    github: "https://github.com/meowfficer",
  },
  aboutMe:
    "I'm a Laravel Full Stack Developer with over 5 years of experience building scalable, maintainable, and secure web applications. Since 2020, I\'ve worked on various projects ranging from internal company systems to public - facing platforms. I am available for any kind of job opportunity that suits my skills and interests. \n My strengths include clean architecture, RESTful APIs, authentication systems, database design, and custom business logic.I enjoy solving real - world problems and improving development workflows.",
  skills: ['HTML',
  'CSS',
  'PHP',
  'Javascript',
  'Laravel',
  'MQTT',
  'Node JS',
  'Tailwind',
  'MySQL',
  'PostgreSQL',
  'Git',
  'AWS',
  'Bootstrap',
  'Docker',
  'Nginx'],
  projects: [
    {
        name: 'ERP System Revamp',
        description: "I led the redevelopment of an existing ERP system, migrating it from legacy PHP code to Laravel. The new version was redesigned with improved architecture, cleaner codebase, and enhanced functionality to support modern business workflows. The system is now integrated with IoT devices, enabling real-time monitoring and control through MQTT and Socket.io. Development includes refactoring old modules, optimizing database structure, and continuously adding new features and integrations.",
        images: [
          '/images/project1.png'
        ],
        skills: ['Laravel', 'PostgreSQL', 'Bootstrap', 'jQuery', 'Nginx', 'AWS EC2', 'MQTT', 'Node.js', 'Socket.io'],
    },
    {
        name: 'Government Funding Management System',
        description: "I developed a web-based platform for a government institution to manage and track annual public funding (similar to APBN). The system allows users to monitor budget allocations, expenditures, and funding progress by year. Built with Laravel and PostgreSQL, it provides secure role-based access control, detailed reporting, and data visualization for financial transparency.",
        images: [],
        skills: ['Laravel', 'PostgreSQL', 'Bootstrap', 'jQuery', 'Chart.js', 'DataTables'],
    },

    {
        name: 'Personal Blog CMS',
        description: "I built a personal blogging platform to manage and publish news articles and content. The system includes features such as post creation with a rich text editor, image upload, category management, and SEO-friendly URLs. Developed using Laravel and MySQL, it provides a clean admin interface for easy content management and a responsive front-end for readers.",
        images: [],
        skills: ['Laravel', 'PostgreSQL', 'Bootstrap', 'TinyMCE', 'Blade'],
    },

    {
        name: 'Airport Taxi Monitoring System',
        description: "I developed a web-based monitoring system for tracking taxi movements in and out of the airport. Each taxi entry and exit generates real-time revenue data, which is transmitted via MQTT and WebSocket from IoT devices. I was responsible for building the web dashboard, data visualization, and backend logic using Laravel and PostgreSQL.",
        images: [],
        skills: ['Laravel', 'PostgreSQL', 'Bootstrap', 'MQTT', 'Socket.io', 'Chart.js'],
    },

    {
        name: 'MRP Reporting Module',
        description: "I contributed to the development of an MRP (Material Requirement Planning) system by building a custom Excel reporting module. The reports were fully dynamic and generated from complex production and inventory data using Laravel and PostgreSQL. My main focus was optimizing query performance, implementing data aggregation logic, and exporting structured Excel reports tailored to business needs.",
        images: [],
        skills: ['Laravel', 'PostgreSQL', 'PhpSpreadsheet', 'Bootstrap', 'jQuery'],
    },

    {
        name: 'CCTV Monitoring System',
        description: "I developed and improved the web interface for a CCTV monitoring system. The system displays and manages active camera feeds, including automatic coordinate adjustments for each CCTV unit. I also handled the Docker setup to containerize the application for easier deployment and maintenance.",
        images: [],
        skills: ['Laravel', 'PostgreSQL', 'Docker', 'Bootstrap', 'Leaflet.js', 'jQuery'],
    },

    {
        name: 'Machine Data Integration Module',
        description: "I developed a custom import and export feature to process and analyze machine-generated data. The system reads raw machine files, converts them into structured formats, and generates detailed reports for monitoring and performance evaluation. Built with Laravel and PostgreSQL, the module leverages Maatwebsite Excel for flexible data handling and report generation.",
        images: [],
        skills: ['Laravel', 'PostgreSQL', 'Maatwebsite Excel', 'Bootstrap', 'jQuery'],
    },

    {
        name: 'IoT Temperature Monitoring Dashboard',
        description: "I developed a web dashboard for real-time temperature monitoring using MQTT and LoRa Gateway. My role focused on integrating the MQTT client to display sensor data dynamically and implementing cloud data transmission for centralized storage and analytics. The system visualizes live temperature readings, ensuring seamless communication between local gateways and the cloud platform.",
        images: [],
        skills: ['Laravel', 'MQTT', 'LoRa Gateway', 'JavaScript', 'Bootstrap'],
    },

    {
        name: 'Government Procurement & Approval System',
        description: "I built a comprehensive government procurement website with a complex multi-level approval workflow. The system allows users to request goods or services, which then go through multiple divisions for verification, budgeting, and authorization before final approval. The project emphasizes role-based access, approval tracking, and process transparency using Laravel and PostgreSQL.",
        images: [],
        skills: ['Laravel', 'PostgreSQL', 'Bootstrap', 'jQuery', 'Spatie Permission'],
    },

    {
        name: 'E-Commerce Backend & ERP Integration',
        description: "I developed the backend system for an e-commerce platform integrated with an existing ERP system. The project involved creating robust APIs to synchronize product, inventory, and order data between the e-commerce and ERP platforms. I also implemented secure payment gateway integrations using PayPal and Midtrans, ensuring reliable transaction handling and order tracking.",
        images: [],
        skills: ['Laravel', 'PostgreSQL', 'REST API', 'Midtrans', 'PayPal SDK'],
    },

    {
        name: 'Public Registration Portal Enhancement',
        description: "I contributed to the development of a government web portal by adding a new registration feature for a public event program (such as free homecoming trips). My work included implementing backend logic for participant registration and refining the front-end interface for better usability and responsiveness.",
        images: [
          '/images/project2.png',
          '/images/project2-2.png'
        ],
        skills: ['Laravel', 'PostgreSQL', 'Tailwind Css', 'jQuery'],
    },
  ],
  experience: [
    {
      company: "PT. Deco Kreasindo",
      title: "IT Staff",
      dateRange: "Jan 2024 - Present",
      bullets: [
        "Developed and implemented new ERP features, improving workflow efficiency by 30% across departments",
        "Maintained IoT systems and devices (temperature sensors, 3D printers), ensuring 99% uptime for monitoring",
        "Collaborated with 5+ cross-department teams to design and build systems based on user requirements, ensuring smooth module integration",
      ],
    },
    {
      company: "PT. Kamiko Cipta Solusi",
      title: "Software Engineer",
      dateRange: "Jun 2021 - Dec 2023",
      bullets: [
        "Developed new modules that enhanced system usability and reduced manual processes by 40%s",
        "Ensured seamless integration of features across multiple applications following internal coding standards",
        "Collaborated with QA and stakeholders to refine features and supported deployment for 20+ enterprise clients",
      ],
    },
    {
      company: "PT. Goodeva Technology",
      title: "Software Engineer Intern",
      dateRange: "Jun 2020 - Mar 2021",
      bullets: [
        "Assisted in developing and refining application modules, helping the team accelerate project timelines by 20%",
        "Collaborated with a 3-member dev team to maintain technical consistency and ensure smooth integration across systems",
        "Supported testing and deployment based on user requirements",
      ],
    },
  ],
  education: [
    {
      school: "Open University of Indonesia",
      degree: "Information Systems",
      dateRange: "2025 - Present",
      achievements: [],
    },
    {
      school: "Vocational High School 2 Bekasi",
      degree: "Software Engineering",
      dateRange: "2018 - 2021",
      achievements: [],
    },
  ],
};
