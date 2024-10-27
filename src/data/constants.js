import PassImage from "../images/pass.jpg"
import MovieImage from "../images/movieapi.jpg"
import TuneHubImage from"../images/Tunehub.jpg"
import ShopNestImage from"../images/shopnest.jpg"
import SmsImage from"../images/sms.jpg"
import IotImage from"../images/Iot.jpg"
export const Bio = {
  name: "Ravindra Gouda",
  roles: ["Java Backend Developer", "Full Stack Developer"],
  description:
    "Aspiring Java Full Stack Developer | Recent graduate eager to contribute to innovative tech projects. Proficient in Java, Spring Boot, and front-end technologies. Excited about learning, collaborating, and turning ideas into reality. Open to opportunities and connections in the tech world! Let's connect! #Java #FullStack #WebDevelopment",
  github: "https://github.com/Ravindragouda",
  linkedin: "https://www.linkedin.com/in/ravindra-gouda-4993061b7/",
  gmail:"ravindragouda444@gmail.com",
  resume:
    "https://drive.google.com/file/d/1jPtPDuf3y-9yCnXnGMu9HR9l6cHNpcdR/view?usp=sharing",
};

export const experiences = [
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/D560BAQHNh-LJAmatYQ/company-logo_200_200/company-logo_200_200/0/1709053743830/kodnestoffice_logo?e=1738195200&v=beta&t=Qmnd79OVNA6dmQz2EBkpkYmAmBpKrEHYQC1htz74ePY",
    role: "Software Development Intern",
    company: "KodNest, Bengaluru",
    date: "Aug 2023 - Dec 2023",
    desc: "Developed and maintained web applications using Java and Spring Boot. Designed and implemented RESTful APIs for various application modules. Utilized MySQL for database design, queries, and optimization.Gained hands-on experience in full stack development, enhancing both front-end and back-end skills.",
    skills: [
      "Java",
      "Spring Boot",
      "Mysql",
      "React.js",
      "HTML",
      "CSS",
      "GitHub",
      "Postman"
     
     
    ],
  },
];

export const education = [
  {
    id: 0,
    img:"https://2.bp.blogspot.com/-ywMYAtZCYZ8/TWFP7sHURGI/AAAAAAAABIk/GVuEAb9G9-Q/s1600/VTU-logo.png" ,
    collage: "Visvesvaraya Technological University, Belagavi",
    date: "Aug 2019 - May 2023",
    grade: 7.0,
    degree: "Bachelor of Engineering",
  },
  {
    id: 0,
    img: "https://static.collegedekho.com/media/img/institute/logo/1446616399.jpg",
    collage: "JSS RSH PU COLLEGE, Dharwad",
    date: "June 2017 - March 2019",
    grade: 73.33,
    degree: "Class XII",
  },
  {
    id: 0,
    img: "https://th.bing.com/th/id/OIP.SgkaQ1VkRRwdPmm1FyJsNAHaHa?rs=1&pid=ImgDetMain",
    collage: "Sadhana English Medium School, Holalu",
    date: "June 2016 - March 2017",
    grade: 94.24,
    degree: "Class X",
  },
];

export const skills = [
  {
    title: "Frontend",
    skills: [
     
     

      
   
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
    
    
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "React Js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    ],
  },
 
  {
    title: "Backend",
    skills: [
     {
      name:"Java",
      image:"https://th.bing.com/th/id/OIP.n8pa_ux7uUyU9CJrzb1scAHaHa?rs=1&pid=ImgDetMain",

     }
     ,
     {
      name:"Spring Boot",
      image:"https://www.svgrepo.com/show/354380/spring-icon.svg",

     },
     {
      name:"Python",
      image:"https://designlooter.com/images/python-svg-1.png"

     }
     ,
     {
      name:"Mysql",
      image:"https://th.bing.com/th/id/OIP.CXs0mrHXjBV0TDqJ_0V5OQHaHa?rs=1&pid=ImgDetMain"

     }
     ,
     {
      name:"PostgresSql",
      image:"https://th.bing.com/th/id/OIP.4GK_HqDSa7V81hDIaaMi6gHaEK?rs=1&pid=ImgDetMain"

     }
     ,
     
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      {
        name:"GitHub",
        image:
        "https://th.bing.com/th/id/OIP.hIGMGIFrost-G-FNL2kXiQHaHa?rs=1&pid=ImgDetMain",
      }
      ,
      {
        name:"VScode",
        image:
        "https://www.svgrepo.com/download/374171/vscode.svg",
      },
      {
        name:"Intellij idea",
        image:
        "https://th.bing.com/th/id/OIP.eYv4AmZgSbbQLDlvDKd4GwHaHa?rs=1&pid=ImgDetMain",
      },
      {
        name:"Postman",
        image:
        "https://www.svgrepo.com/show/354201/postman.svg"
      }
     
      
    ],

  },
  
  
];

export const projects = [
  {
    id: 1,
    title: " Password Generator",
    // date: "Sep 2024 - Sep 2024",
    description:
      "An application to generate random passwords of different lengths with the choice of including different types of characters, also tells the strength of the password according to the pre-defined rules.",
    image: PassImage,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    category: "web app",
    github: "https://github.com/Ravindragouda/Password-generator.git",
    webapp: "https://password-generator-sooty-five.vercel.app/",
  },

  {
    id: 2,
    title: "MovieVault",
    // date: "Aug 2024 - Aug 2024",
    description:
      "This project comprises a full-stack movie browsing application with a backend API and a front-end interface. The backend API, built using Java and Spring Boot in the MovieApi repository, offers endpoints for managing movie data through CRUD operations. It’s structured following Spring Boot best practices and serves as a reliable backend service for storing and retrieving movie details.The front-end interface is developed with React and offers users an engaging and intuitive experience to explore and search for movies. It includes a polished user interface with search and filtering features, fetching data from the backend API and displaying details for each movie. The project utilizes state management for efficient navigation and integrates styled components to enhance visual appeal. Together, these repositories form a comprehensive movie management and browsing application, showcasing both back-end API design and front-end user interface development.",
    image: MovieImage,
    tags: [
      "Java",
      "Spring Boot",
      "React Js",
       "REST-Api",

      "CSS",
      "Axios",
      "GitHub",
      "MongoDB",
      
    ],
    category: "web app",
    github: "https://github.com/Ravindragouda/MovieApi",
    webapp: "https://github.com/Ravindragouda/Movie-frontend",
  },
  {
    id: 3,
    title: "TuneHub",
    // date: "Aug 2024 - Aug 2024",
    description:
      "Developed a dynamic and feature-rich music streaming web application using Spring Boot, Java, HTML,CSS,and MySQL Integrated features such as playlist creation, song recommendations, and personalized user pro les. Implemented a responsive user interface and optimized performance for a seamless user experience.",
    image: TuneHubImage,
    tags: [
      "Spring Boot",
      "Java",
      "REST-Api",
      "HTML",
      "CSS",
      "Mysql"
    ],
    category: "web app",
    github: "https://github.com/Ravindragouda/Tune-Hub",
    webapp: "https://github.com/Ravindragouda/Tune-Hub",
  },
  {
    id: 4,
    title: "ShopNest",
    // date: "Aug 2024 - Aug 2024",
    description:
      "Developed a full-stack e-commerce web application using Spring Boot, Java, HTML, CSS, and MySQL.Implemented user authentication, product management, and shopping cart functionalities.Admin user can add new products, and customers can explore products, add them to the cart, and checkout.Users need to register and log in to access functionalities. Enhanced security features and ensured data integrity through proper validation and error handling.",
    image: ShopNestImage,
    tags: [
      "Spring Boot",
      "Java",
      "REST-Api",
      "HTML",
      "CSS",
      "Mysql"
    ],
    category: "web app",
    github: "https://github.com/Ravindragouda/ShopNest",
    webapp: "https://github.com/Ravindragouda/ShopNest",
  },
  {
    id: 5,
    title: "Student Management System",
    // date: "Aug 2024 - Aug 2024",
    description:
      "The Student Management System is a web-based application developed using Spring Boot, designed to manage student information efficiently. This system allows users to perform basic CRUD (Create, Read, Update, Delete) operations on student records and view the results through a user-friendly web interface.",
    image: SmsImage,
    tags: [
      "Spring Boot",
      "Java",
      "REST-Api",
      "Thymeleaf",
      "HTML",
      "CSS",
      "Mysql"
    ],
    category: "web app",
    github: "https://github.com/Ravindragouda/ShopNest",
    webapp: "https://github.com/Ravindragouda/ShopNest",

  },
  {
    id: 6,
    title: "Chatura Suraksha Kavacha A final year Best project of the year-2023 Karnataka based on IOT.",
    // date: "Aug 2024 - Aug 2024",
    description:
      "Leveraging the power of IoT (Internet of Things) Chatura Suraksha Kavacha is not just a safety helmet  it's a revolutionary solution that ensures the well-being of mine workers like never before. Equipped with cutting-edge sensors and seamlessly integrated with the Blynk cloud and app, this helmet takes worker safety to unparalleled heights.",
    image: IotImage,
    tags: [
      "IOT",
      "Blynk",
      "NodeMcu",
    ],
    category: "IOT Project",
    github: "https://youtu.be/uBUzcDjavX8?si=HHtoo8cNAc9e-P2Z",
    webapp: "https://youtu.be/uBUzcDjavX8?si=HHtoo8cNAc9e-P2Z",


  }
];

export const TimeLineData = [{ year: 2023, text: "Started my journey" }];
