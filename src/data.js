// All portfolio content lives here. Update this file to change what shows
// up on the site — no need to touch the components themselves.

export const profile = {
  name: "Aneesh Adithya SR",
  shortName: "Aneesh Adithya SR",
  title: "Full-Stack Developer & Cloud Computing",
  tagline:
    "I build full-stack web applications and cloud-native systems on AWS — with a side interest in AI/ML I'm actively exploring.",
  location: "Bengaluru, Karnataka, India",
  email: "aneeshadithyaa@gmail.com",
  phone: "+91 99001 95575",
  linkedin: "https://www.linkedin.com/in/aneesh-adithya-s-r-52619b264",
  github: "https://github.com/Aneesh997",
  resumeUrl: "./resume/Aneesh_Adithya_SR_Resume.pdf",
};

// Ordered so Full-Stack & Cloud lead — that's the primary focus.
export const skillGroups = [
  {
    title: "Full-Stack Development",
    icon: "Code2",
    items: ["React.js", "Node.js", "Express.js", "MERN Stack", "Flask", "HTML/CSS", "REST APIs"],
  },
  {
    title: "Cloud Computing (AWS)",
    icon: "Cloud",
    items: ["AWS IAM", "Lambda", "API Gateway", "DynamoDB", "Cognito", "STS", "CloudWatch", "Docker"],
  },
  {
    title: "Languages & Databases",
    icon: "Database",
    items: ["Python", "Java", "JavaScript", "C", "MySQL", "MongoDB", "DynamoDB"],
  },
  {
    title: "Core CS & Tools",
    icon: "Wrench",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Git & GitHub", "Postman"],
  },
];

// A secondary, honestly-labeled interest area — not the main pitch.
export const exploring = {
  title: "Also exploring",
  blurb:
    "I'm enthusiastic about AI/ML and pick up projects in it for fun and learning — CNNs, computer vision, and applied deep learning — but my core focus is full-stack and cloud engineering.",
  items: ["Machine Learning", "Deep Learning", "Computer Vision", "OpenCV", "TensorFlow"],
};

// Latest to oldest.
export const experience = [
  {
    role: "Software Development Engineer Intern",
    company: "AdvisorKhoj (B2B Wealth Technology)",
    location: "Bengaluru, Karnataka",
    period: "16 Jun 2026 – 15 Aug 2026",
    tags: ["React", "Node.js", "Full-Stack"],
    bullets: [
      "Conducted R&D and developed a lightweight, compliance-focused Global CRM module within MF Box, an existing React + Java SaaS product for mutual fund distributors.",
      "Built features for tracking client communications for audit-trail purposes, implementing role-based access control and coordinating cross-team feature design.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Bharat Electronics Limited (BEL)",
    location: "Bengaluru, Karnataka",
    period: "3 Jun 2026 – 2 Jul 2026",
    tags: ["Full-Stack", "Python", "Flask"],
    bullets: [
      "Built a full-stack web app for real-time speech enhancement using DeepFilterNet and OpenAI Whisper.",
      "Implemented a multi-stage audio pipeline (filtering, denoising, transcription) with a custom SNR measurement method achieving 14–17 dB improvements and up to 97% noise reduction.",
    ],
    certificateLink: "https://drive.google.com/file/d/17haKZ_NP4sEfD-avQWq__j1zmuHgihs_/view?usp=drive_link",
  },
  {
    role: "AI/ML Intern",
    company: "RV University",
    location: "Bengaluru, Karnataka",
    period: "1 Jun 2025 – 31 Jul 2025",
    tags: ["AI/ML", "Flask", "Web API"],
    bullets: [
      "Built a real-time emotion-based music recommender (MoodSync) using CNNs and OpenCV.",
      "Integrated the Spotify Web API with OAuth authentication behind a Flask backend.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech (Hons.) in Computer Science Engineering",
    institution: "RV University, Bengaluru",
    period: "2023 – 2027",
    detail: "Specialization in Cloud Computing.",
  },
  {
    degree: "Pre-University Course (PCMB)",
    institution: "Vidyaniketan PU College, Bengaluru",
    period: "2021 – 2023",
    detail: "Physics, Chemistry, Mathematics, Biology.",
  },
  {
    degree: "Secondary School (10th, CBSE)",
    institution: "Vidyaniketan Public School, Bengaluru",
    period: "2020 – 2021",
    detail: "",
  },
];

// category: "fullstack" | "cloud" | "ai" | "iot"
// Ordered latest to oldest by date.
export const projects = [
  {
    title: "BlinkAccess — JIT AWS Credential Vending System",
    category: "cloud",
    period: "Mar 2026 – Apr 2026",
    description:
      "A Just-In-Time, Zero-Standing-Privileges credential vending platform. Cognito handles auth, STS issues short-lived role-based credentials, and Lambda/CloudWatch auto-revoke expired grants — every request is logged to DynamoDB for audit.",
    tags: ["AWS Cognito", "Lambda", "API Gateway", "DynamoDB", "STS", "CloudWatch", "React"],
    github: "https://github.com/Aneesh997/Blink-Access-JIT-App",
  },
  {
    title: "Autonomous EKF-SLAM Navigation System",
    category: "iot",
    period: "Nov 2025 – Dec 2025",
    description:
      "SLAM-based indoor navigation for a differential-drive robot using an Extended Kalman Filter, sensor fusion, landmark mapping and obstacle avoidance.",
    tags: ["ROS", "Robotics", "SLAM", "Sensor Fusion"],
    github: "https://github.com/Aneesh997/Autonomous-EKF-SLAM-Navigation-System",
  },
  {
    title: "Smart Waste Bin using IoT & ML",
    category: "iot",
    period: "Oct 2025 – Nov 2025",
    description:
      "ESP32-based smart bin using a CNN model to monitor fill level and classify wet/dry waste, with real-time data display.",
    tags: ["ESP32", "IoT", "CNN", "Sensors"],
    github: "https://github.com/Aneesh997/Smart-Waste-Bin-using-IoT-Sensors-Machine-Learning",
  },
  {
    title: "MoodSync — Emotion-Aware Music Recommender",
    category: "ai",
    period: "Jun 2025 – Jul 2025",
    description:
      "Real-time facial emotion detection (CNN, VGG19 architecture) paired with the Spotify Web API to recommend personalized playlists. Built with OpenCV and a Flask backend.",
    tags: ["CNN", "OpenCV", "Flask", "Spotify API", "OAuth"],
    github: "https://github.com/Aneesh997/Emotion-Aware-Music-Recommender-Using-Facial-Expression-Analysis",
  },
  {
    title: "Odor Classification using Machine Learning",
    category: "ai",
    period: "Mar 2025 – May 2025",
    description:
      "ML/DL pipeline classifying odors from e-nose sensor arrays (MQ & TGS sensors) for healthcare and fragrance-design applications, using decision trees, random forests and DNNs.",
    tags: ["Machine Learning", "Deep Learning", "Sensors", "Data Analysis"],
    github: "https://github.com/Aneesh997/Odor-Classification-using-Machine-Learning",
  },
  {
    title: "Fit-Track Pro — AI-Powered Fitness Tracker",
    category: "fullstack",
    period: "Mar 2025 – Apr 2025",
    description:
      "End-to-end health & fitness tracker built with ReactJS, Flask and MySQL. Tracks workouts, meals, sleep, BMI and water intake with visualizations, plus Gemma-2B-powered fitness suggestions.",
    tags: ["ReactJS", "Flask", "MySQL", "REST API", "Gemma-2B"],
    github: "https://github.com/Aneesh997/Fitness-Tracker-Website",
  },
  {
    title: "Securing Student Scores using Blockchain",
    category: "cloud",
    period: "Jun 2024 – Jul 2024",
    description:
      "An Ethereum smart-contract application for tamper-proof student records — role-based access control, OTP authentication, SHA-256 encryption and decentralized storage.",
    tags: ["Solidity", "Ethereum", "Blockchain", "Cryptography"],
    github: "https://github.com/Aneesh997/Securing-Student-Scores-Using-Blockchain/",
  },
];

// Latest to oldest. The BEL internship certificate is linked from the
// Experience section instead of listed here (it belongs to that internship).
export const certifications = [
  {
    title: "Affective Computing",
    issuer: "NPTEL — Elite, 90%",
    period: "Jan – Apr 2026",
    detail: "Facial & speech emotion recognition, signal processing, human-computer interaction.",
    link: "https://drive.google.com/file/d/1nna6MauEF1cRMomwLjOzf2L_WVr-4e51/view?usp=drive_link",
  },
  {
    title: "Design & Implementation of Human-Computer Interfaces",
    issuer: "NPTEL — Elite",
    period: "Jul – Oct 2025",
    detail: "UI/UX design, heuristics testing, cognitive walkthroughs, SRS & UML modeling.",
    link: "https://drive.google.com/file/d/1C5dRTepSBxjAWa9_iNGc4THgwFHF7ZZY/view?usp=drive_link",
  },
];

export const projectFilters = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "cloud", label: "Cloud & Security" },
  { key: "ai", label: "AI / ML" },
  { key: "iot", label: "IoT & Robotics" },
];
