import textutilImg from "../assets/textutil.png";
import newsmonkeyImg from "../assets/newsMonkey.png";
import inotebookImg from "../assets/inotebook.png";
import pokedexImg from "../assets/pokedex.png";
import portfolioImg from "../assets/portfolio.png";
import foodvillaImg from "../assets/foodvilla.png";
import devTinderImg from "../assets/devTinder.png";

export const projectData = [
  {
    id: "foodvilla",
    title: "FoodVilla",
    image: foodvillaImg, 
    description:
      "A production-ready Swiggy-like food ordering platform built with React, featuring live restaurant data, dynamic routing, optimized performance, reusable components, and a clean responsive UI following best practices.",

    techStack: ["React", "Redux Toolkit", "Tailwind Css", "Swiggy API"],

    features: [
      "Live restaurant & menu data using Swiggy API",
      "Advanced cart management with Redux Toolkit",
      "Shimmer UI for skeleton loading",
      "Search, filter, sorting & category-based browsing",
      "Reusable components with clean architecture",
      "Fully responsive modern user interface",
    ],

    github: "https://github.com/PrachiShree-SDE/foodvilla",
    // live: "", // add when deployed to Vercel
  },


  {
  id: "devtinder",
  title: "DevTinder",
  image: devTinderImg, 

  description:
    "A full-stack developer networking platform inspired by Tinder, built using the MERN stack. Users can create profiles, send connection requests, manage matches, and interact through a secure authentication system with a modern responsive UI.",

  techStack: [
    "React",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
    "DaisyUI"
  ],

  features: [
    "Secure user authentication using JWT & cookies",
    "Create and manage developer profiles",
    "Send, accept, reject, and review connection requests",
    "Personalized developer feed with smart filtering",
    "Redux Toolkit for global state management",
    "Protected routes and authorization middleware",
    "Responsive UI optimized for all devices",
    "RESTful API integration with MongoDB database"
  ],

  github: "https://github.com/PrachiShree-SDE/devTinder",
  // live: "", // add deployed link when available
},

  {
    id: "textutils",
    title: "TextUtils",
    image: textutilImg,
    description:
      "A powerful React-based text utility tool that transforms, analyzes, and optimizes text instantly with features like word count, character count, and reading time estimation.",
    techStack: ["React", "Bootstrap"],
    features: [
      "Convert text to uppercase/lowercase",
      "Word & character count",
      "Reading time estimate",
    ],
    github: "https://github.com/PrachiShree-SDE/Textutils",
    live: "https://textutils-red-eight.vercel.app/",
  },

  {
    id: "newsmonkey",
    title: "NewsMonkey",
    image: newsmonkeyImg,
    description:
      "A real-time news application built with React and NewsAPI that delivers live headlines across categories like technology, business, sports, and entertainment with smooth infinite scrolling and fast performance.",
    techStack: ["React", "API"],
    features: ["Live news", "Categories", "Infinite scrolling"],
    github: "https://github.com/PrachiShree-SDE/newsmonkey-react",
    live: "https://newsmonkey-react-7xny.vercel.app/",
  },

  {
    id: "inotebook",
    title: "iNotebook",
    image: inotebookImg,
    description:
      "A secure full-stack MERN note-taking application that allows users to create, manage, and store personal notes in the cloud with authentication, REST APIs, and a modern responsive UI.",
    techStack: ["MongoDB", "Express", "React", "Node"],
    features: ["User auth", "Cloud notes", "Secure API"],
    github: "https://github.com/PrachiShree-SDE/inotebook",
    // live: "https://inotebook.vercel.app",
  },
  
  {
    id: "pokedex",
    title: "PokeDex",
    image: pokedexImg,
    description:
      "A React-based Pokémon explorer application using PokéAPI that lets users search Pokémon, view stats, abilities, and types in a visually rich and responsive interface.",
    techStack: ["React", "PokeAPI", "CSS"],
    features: [
      "Search Pokémon by name or ID",
      "Shows stats, abilities, types",
      "Clean responsive UI",
    ],
    github: "https://github.com/PrachiShree-SDE/PokeDex",
    live: "https://poke-dex-zeta-nine.vercel.app/",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    image: portfolioImg, 
    description:
      "A high-end, minimalist portfolio designed with a 'Sober & Stylish' aesthetic. It features a fully responsive design, dynamic project routing, dark mode integration, and a glassmorphic UI architecture to showcase my engineering journey.",
    techStack: ["React", "Tailwind", "Framer Motion"],
    features: [
      "Dynamic Routing & Case Studies",
      "Custom Dark/Light Mode logic",
      "EmailJS Integration",
    ],
    github: "https://github.com/PrachiShree-SDE/portfolio",
    live: "https://portfolio-delta-swart-cob3vkl37r.vercel.app/",
  },
];
