
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // 
// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 3000
};


const illustration = {
  animated: true 
};


const greeting = {
  username: "Amir Here",
  title: "Hi all, I'm Amir",
  subTitle: emoji(
    "A passionate College Student wanna be a Programmer 💻 who is now Wasting Time for improving his skills in C/C++, JavaScript, Python, ReactJS, NodeJS, Django."
  ),
  FootersubTitle:emoji(
    "And Wasting Time is Also an Art 😉"
  ),
  
  displayGreeting: true 
};
// Social Media Links

const socialMediaLinks = {
  github: " https://github.com/HasanIbnAmir ",
  linkedin: " https://www.linkedin.com/in/hasan-ibn-amir-27a648213/",
  gmail: "hasanamir663@gmail.com",
  facebook: "https://www.facebook.com/52HertzWhale.Toha",
  instagram: "https://www.instagram.com/hasan_ibn_amir_/",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do or wanna learn",
  subTitle: "CRAZY BUG FIXER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Learning to Develop highly interactive Frontend and Backend Development for web and mobile applications"
    ),
    emoji("⚡Learning Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡Doing Competitve Programming and Problem Solving in C/C++"
    ),
    emoji(
      "⚡Wanna be a Pro of Data Structure and Algorithm"
    ),
    emoji(
      "⚡Bug hunting & pentesting"
    )
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "BIAM Model School And College, Bogura",
      logo: require("./assets/images/BiamLogo.jpg"),
      subHeader: "Preparing for HSC-2022 in Science",
      duration: "August 2020 - running",
    },
    {
      schoolName: "BIAM Model School And College, Bogura",
      logo: require("./assets/images/BiamLogo.jpg"),
      subHeader: "passed SSC-2020 in Science",
      duration: "January 2018 - January 2020",
    },
  ]
};


const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "25%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    },
    {
      Stack: "Linux",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: true  
};


const workExperiences = {
  display: false, 
  experience: [
    {
      role: "",
      company: "",
      companylogo: require("./assets/images/ComingSoon.jpg"),
      date: "",
      desc: "",
      descBullets: [ ""]
    }
  ]
};


const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big project

const bigProjects = {
  title: "Top Projects",
  subtitle: "APPLICATIONS THAT I DEVELOPED WITH MY TEAM",
  projects: [
    {
      image: require("./assets/images/cloud1.png"),
      projectName: "Cloud Me",
      projectDesc: "Upload File, Copy Link & Share with your Friends",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cloud-mee.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/socialEngi.png"),
      projectName: "Social Engineering",
      projectDesc: "A social engineering tool, used for pentesting purpose",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://facebook-cryptic-science.herokuapp.com/"
        }
      ]
    }
  ],
  display: true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi just inbox me",
  number: "+8801992012727",
  email_address: "hasanamir663@gmail.com",
  display: true 
};



export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo
};
