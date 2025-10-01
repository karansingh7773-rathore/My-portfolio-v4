import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/karan_singh_rathore_6350/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/karansingh7773/",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;



export const BACKEND_SKILL = [
  
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft Azure",
    image: "azure.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "n8n.io",
    image: "n8n.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "OpenAI",
    image: "chatgpt.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Supabase",
    image: "supabase.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Amazon Web Services",
    image: "aws.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 80,
    height: 80,
  },


] as const;

export const FULLSTACK_SKILL = [
] as const;

export const OTHER_SKILL = [

] as const;

export const PROJECTS = [
  {
    title: "🛒 Tekisky Mart – The Future of eCommerce",
    
    image: "/projects/project-1.webp",
    slug: "tekisky-mart",
  },
  {
    title: "Tekisky – The Future of Tech",

    image: "/projects/project-2.webp",
    link: "https://tekisky.com/",
    slug: "tekisky",
  },
  {
    title: "Speedline Auto Parts – The Future of Auto Parts",
   
    image: "/projects/project-3.webp",
    link: "https://speedlineautoparts.netlify.app/",
    slug: "speedline-auto-parts",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/karansingh7773-rathore",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/karansingh7773/",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Contact Me",
        icon: FaEnvelope,
        link: "mailto:karansinghrathore820@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;


