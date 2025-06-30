import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React, Bootstrap and Tailwind, as well as back-end technologies like Laravel, Django, SpringBoot, MariaDB and MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Laravel, MariaDB and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: " 08/2024 – 08/2024",
    role: " IT infrastructure internship",
    company: "Income-IGI Group",
    description: `During my internship at Income, I gained hands-on experience in maintaining and 
    optimizing IT infrastructure to ensure smooth operations. My role demanded problem
    solving skills, attention to detail, and the ability to work efficiently under pressure.
    Key Roles:`,
    roles : [
      "• Server Management: Contributed to configuring and maintaining servers to optimize performance and reliability.",
      "• Hardware Setup and Maintenance: Involved in the setup, configuration, and maintenance of workstations and other IT equipment.",
      "• Technical Support: Provided first-level technical support, resolving hardware and software issues for employees"
    ],
  },
];

export const PROJECTS = [
  {
    title: "Learning Management System",
    image: project4,
    description:
      "Developed a web-based LMS using a 3-tier architecture for course and user management. Dynamic course creation, student enrollment, assignment and quiz management,grading, and attendance tracking.Role-based access for Admin, Instructor, and Student using Spring Security and JWT for authentication and authorization. Implemented email notifications for enrollments, new lessons, and assignment grades. Added reporting features for performance analytics, including Excel reports and visual charts.",
    technologies: ["Java", "RESTful API"],
  },
  {
    title: "Food Website",
    image: project1,
    description:
      "Developed a dynamic fullstack web application that allows users to explore, add, and manage recipes and cuisines seamlessly. The platform enables the creation and categorization of recipes under various cuisines, enhancing user engagement through intuitive navigation and a responsive design",
    technologies: ["HTML", "CSS", "JavaScript", "Django"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind","Framer Motion"],
  },
  {
    title: "EndCreativeStudio Website",
    image: project2,
    description:
      "Developed and launched EndCreativeStudio, a marketing services website designed to help businesses enhance their online presence. The platform provides digital marketing solutions, branding strategies, and creative content development to drive customer engagement and business growth.",
    technologies: ["HTML", "CSS", "JavaScript", "Webflow"],
  },
  {
    title: "Multithreaded Parking System",
    image: project5,
    description:
      "Designed and implemented a Java-based parking system that uses multithreading to simulate parking lot operations .",
    technologies: ["Java"],
  },
  {
    title: "Java-based Command Line Interpreter",
    image: project6,
    description:
      "A basic Command Line Interpreter (CLI) that mimics the functionality of a Unix/Linux shell. The CLI supports a variety of system commands as well as internal commands to enhance user interaction.",
    technologies: ["Operating Systems","Java","Junit"],
  },
 
];

export const CONTACT = {
  email: "mostafamohamed62005@gmail.com",
};
