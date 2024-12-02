export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const socialLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohd-asad-shoyeb-983a08213', // Replace with your LinkedIn profile link
    icon: '/assets/linkedin.svg', // Add LinkedIn icon to the `assets` folder
  },
  {
    id: 2,
    name: 'GitHub',
    href: 'https://github.com/asadsaves', // Replace with your GitHub profile link
    icon: '/assets/github.svg', // Add GitHub icon to the `assets` folder
  },
  {
    id: 3,
    name: 'LeetCode',
    href: 'https://leetcode.com/u/asadshoyeb/', // Replace with your LeetCode profile link
    icon: '/assets/leetcode.svg', // Add LeetCode icon to the `assets` folder
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Mohammad Zeeshan Moeed',
    position: 'Senior MEP Quantity Surveyor/Senior Cost Manager',
    img: 'assets/review4.png',
    review:
      'Asad demonstrated a strong aptitude for problem-solving and his work ethic is commendable. His approach to learning and mastering new technologies is impressive for a prefinal-year CSE student.',
  },
  {
    id: 2,
    name: 'Pratibha Singh',
    position: 'Business HR at Tata Motors Limited',
    img: 'assets/review2.png',
    review:
      'Asad’s technical expertise and dedication during his internship at Tata Motors were remarkable, delivering impressive results on advanced projects.',
  },
  {
    id: 3,
    name: 'Mohd Saquib Siraj',
    position: 'Senior Software Engineer at Qualcomm ',
    img: 'assets/review3.png',
    review:
      'I was impressed with Asad’s problem-solving skills and his understanding of embedded systems, C, and Java. As a third-year CS student, his dedication and technical potential are evident.',
  },
  {
    id: 4,
    name: 'Prof. (Dr.) Wajahat Rizvi',
    position: 'Professor CSE Amity University Lucknow Campus',
    img: 'assets/review1.png',
    review:
      'Asad’s expertise and dedication were truly impressive. He delivered exceptional results for our project, showcasing a strong understanding of complex concepts and an ability to apply them effectively. His commitment to excellence, combined with his ability to work collaboratively, makes him a standout student in the field of computer science.',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://github.com/asadsaves/ai-podcast-platform',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://github.com/asadsaves/collaborative-editor',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://github.com/asadsaves/healthcare',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://github.com/asadsaves/banking-platform',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://github.com/asadsaves/ai-saas-app',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Incedo Inc.',
    pos: 'Software Development Intern',
    duration: '2024 - current',
    title: "As a Software Development Intern in the fintech sector, I contributed to optimizing backend systems using Java and Python. I enhanced APIs for seamless data integration and improved the performance of financial applications. My work focused on building scalable, secure systems for managing large volumes of data. I gained hands-on experience in fintech application development and data processing.",
    icon: '/assets/incedo.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Tata Motors',
    pos: 'Data Analysis Intern',
    duration: 'Jun 2024 - Aug 2024',
    title: "As a Data Analysis Intern, I worked on improving workplace safety through computer vision and machine learning. I developed models for drowsiness detection and automated license plate recognition, enhancing operational efficiency and security. This experience sharpened my skills in data analysis and real-time problem-solving. I contributed to implementing scalable solutions for the company’s industrial operations.",
    icon: '/assets/tatamo.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Alias Tech Club',
    pos: 'Technical Lead',
    duration: '2023 - present',
    title: "In my role as Technical Leader at Alias, I led projects and workshops to foster collaboration and innovation. I mentored peers, organized coding events, and managed technical initiatives within the club. This role honed my leadership skills and ability to guide technical teams. I played a key part in promoting technical growth within the college community.",
    icon: '/assets/alias.svg',
    animation: 'salute',
  },
];
