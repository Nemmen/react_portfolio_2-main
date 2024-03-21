// import images
import Hero_person from "./assets/images/Hero/mypic_.png";

import figma from "./assets/images/Skills/png-transparent-next-js-hd-logo.png";
import sketch from "./assets/images/Skills/fire.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/website.webp";
import project2 from "./assets/images/projects/website.webp";
import project3 from "./assets/images/projects/metro.PNG";
import person_project from "./assets/images/Hero/mypic_.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hero/mypic_.png";
import Hireme_person2 from "./assets/images/Hero/mypic_.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    // {
    //   link: "#services",
    //   icon: RiServiceLine,
    // },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Aryan",
    LastName: "kamboj",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "7+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Next js",
        para: "",
        logo: figma,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "",
        logo: ps,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Firebase",
        para: "",
        logo: sketch,
      },
      {
        name: "Python",
        para: "",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "EmpowerMend",
        image: project1,
        link:"https://github.com/Nemmen/comm-fire"
      },
      {
        title: "React Tailwind Website",
        image: project2,
        link:"https://github.com/Nemmen/react-tailwind-project"
      },
      {
        title: "metropolitanfence",
        image: project3,
        link:"https://www.metropolitanfence.ca/"
      },{
        title:"CleanScape - app" ,
        image: project2,
        link:"https://github.com/SuperiorSU/Hack-n-Win-Hackathon/tree/main/cleanScape"
      },{
        title:"AlertWise",
        image:project2,
        link:"https://github.com/Nemmen/alertWise",
      }
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Thank you",
    subtitle: "for considering my Application",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "My name is Aryan Kamboj , a 20-year-old Student who is  pursuing  B.Tech CSE from Swami Vivekanand Institute of Engineering and Technology , Chandigarh . Thank you for Scrolling!",
    btnText: "GDSC Application",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "GDSC Apllication ",
  },
};
