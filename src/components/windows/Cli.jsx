import React from "react";
import Macwindow from "./Macwindow";
import Terminal from "react-console-emulator";

const Cli = ({windowName, setWindowsState}) => {
  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "Display information about me.",
      usage: "about",
      fn: () =>
        "Hi! I'm Shivam Singh, a passionate full-stack developer with expertise in React, Node.js, and modern web technologies. I love creating beautiful and functional user interfaces.",
    },
    projects: {
      description: "List my notable projects.",
      usage: "projects",
      fn: () => `My Projects:
• Portfolio Website - A React-based portfolio showcasing my work
• E-commerce Platform - Full-stack application with React and Node.js
• Task Management App - MERN stack application for productivity
• Weather Dashboard - React app with API integration
• Blog Platform - Content management system with authentication`,
    },
    skills: {
      description: "Display my technical skills.",
      usage: "skills",
      fn: () => `Technical Skills:
Frontend: React, Vue.js, HTML5, CSS3, JavaScript (ES6+), TypeScript
Backend: Node.js, Express.js, Python, Django
Database: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, AWS, VS Code, Figma
Other: REST APIs, GraphQL, Agile/Scrum`,
    },
    contact: {
      description: "Get my contact information.",
      usage: "contact",
      fn: () => `Contact Information:
Email: shivam@example.com
LinkedIn: linkedin.com/in/shivamsingh
GitHub: github.com/shivamsingh
Twitter: @shivamsingh_dev
Location: Remote / Open to opportunities`,
    },
    experience: {
      description: "Show my work experience.",
      usage: "experience",
      fn: () => `Work Experience:
• Senior Full-Stack Developer at TechCorp (2022-Present)
  - Led development of scalable web applications
  - Mentored junior developers and conducted code reviews
• Full-Stack Developer at StartupXYZ (2020-2022)
  - Built MVPs and prototypes for various clients
  - Implemented CI/CD pipelines and automated testing
• Junior Developer at WebAgency (2019-2020)
  - Developed responsive websites and web applications
  - Collaborated with designers and product managers`,
    },
    education: {
      description: "Display my educational background.",
      usage: "education",
      fn: () => `Education:
• Bachelor of Computer Science - University of Technology (2015-2019)
  - GPA: 3.8/4.0
  - Relevant Coursework: Data Structures, Algorithms, Web Development
• Online Certifications:
  - AWS Certified Developer
  - React Advanced Concepts
  - Node.js Microservices`,
    },
  };

  return (
    <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`Welcome to Shivam's Portfolio Terminal!
Type 'help' to see all available commands.

Available Commands:
• about - Display information about me
• projects - List my notable projects
• skills - Display my technical skills
• contact - Get my contact information
• experience - Show my work experience
• education - Display my educational background
• echo - Echo a passed string
• help - List all available commands
• clear - Clear the terminal screen
• history - Show command history

Enjoy exploring my portfolio! 🚀`}
          promptLabel={"shivamsingh:~$"}
          promptLabelStyle={{ color: "green", fontWeight: "bold" }}
        />
      </div>
    </Macwindow>
  );
};

export default Cli;
