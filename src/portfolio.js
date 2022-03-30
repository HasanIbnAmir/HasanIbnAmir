
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};


const greeting = {
  username: "Antu Here",
  title: "Hi all, I'm Antu",
  subTitle: emoji(
    "A passionate College Student wanna be a Programmer 💻 who is now Wasting Time for learning C/C++, JavaScript, Python, ReactJS, NodeJS, Django."
  ),
  FootersubTitle:emoji(
    "And Wasting Time is Also an Art 😉"
  ),
  
  displayGreeting: true 
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AntuHere",
  linkedin: "https://www.linkedin.com/in/md_aunto/",
  gmail: "nasfiqul.islam532002@gmail.com",
  facebook: "https://www.facebook.com/aunto.ab",
  instagram: "https://www.instagram.com/md_aunto",
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
    }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Dhaka College",
      logo: require("./assets/images/DCLogo.png"),
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
      progressPercentage: "65%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "55%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
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
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME APPLICATIONS THAT I MADE WITH MY FRIEND",
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
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi just inbox me",
  number: "+8801773890624",
  email_address: "nasfiqul.islam532002@gmail.com",
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
