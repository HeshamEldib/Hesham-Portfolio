import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const navigation: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// 2. مصفوفة التواصل والسوشيال (تعتمد على Lucide)
export const socialLinks = [
  {
    label: "GitHub",
    icon: Github, // هنا نمرر الـ Component
    href: "https://github.com/HeshamEldib",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/hesham-eldib",
  },
  {
    label: "Email",
    icon: Mail,
    value: "heshameldib27@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=heshameldib27@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+(20) 1145471405",
    href: "https://wa.me/201145471405",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Egypt, Cairo",
    href: "https://www.google.com/maps/search/?api=1&query=Egypt,+Cairo",
  },
];

// 1. مصفوفة المهارات (تعتمد على الصور)
export interface Skill {
  title: string;
  image: string;
}
export const skills: Skill[] = [
  { title: "Next.js", image: "/skills/next.png" },
  { title: "React", image: "/skills/react.png" },
  { title: "TypeScript", image: "/skills/ts.png" },
  { title: "HTML", image: "/skills/html.png" },
  { title: "CSS", image: "/skills/css.png" },
  { title: "JavaScript", image: "/skills/js.png" },
  { title: "SASS", image: "/skills/sass.png" },
  { title: "Bootstrap", image: "/skills/bootstrap.png" },
  { title: "Tailwind CSS", image: "/skills/tailwind-css.png" },
  { title: "Redux", image: "/skills/redux.png" },
  { title: "Node.js", image: "/skills/node.png" },
  { title: "Express", image: "/skills/express.png" },
  { title: "MongoDB", image: "/skills/mongodb.png" },
  // { title: "REST API", image: "/skills/rest-api.png" },
  { title: "GraphQL", image: "/skills/graphql.png" },
  // { title: "WordPress", image: "/skills/wordpress.png" },
  { title: "Jest", image: "/skills/jest.png" },
  { title: "Git", image: "/skills/git.png" },
  { title: "GitHub", image: "/skills/github.png" },
];

// 3. مصفوفة المشاريع (تعتمد على الصور وروابط)
export interface Project {
  id: string;
  title: string;
  image: string;
  gallery?: string[];
  summary: string;
  fullDescription?: string;
  skills: string[];
  github: string;
  linkProject: string;
  hasDetailsPage: boolean;
}
export const projects: Project[] = [
  {
    id: "8",
    title: "Sadeem Store",
    image: "/projects/sadeem.png",
    gallery: [
      "/projects/sadeem.png",
      "/projects/sadeem-1.png",
      "/projects/sadeem-2.png",
      "/projects/sadeem-3.png",
      "/projects/sadeem-4.png",
      "/projects/sadeem-5.png",
      "/projects/sadeem-6.png",
      "/projects/sadeem-7.png",
      "/projects/sadeem-8.png",
      "/projects/sadeem-9.png",
    ],
    summary:
      'A fully integrated, bilingual (Arabic/English) e-commerce store designed for a fashion brand that embodies the concept of "Quiet Luxury." The project was built using Next.js 15 and Sanity CMS for content management, focusing on high performance and a seamless user experience (UX). The store features a sleek, dark design, a comprehensive product and order dashboard, and an advanced shopping cart system.',
    fullDescription: `
    "Sadeem" is a simulation of a modern e-commerce store for a luxury brand. The project aims to build a fast, secure, and user-friendly shopping experience that fully supports both Arabic and English (RTL/LTR). It's not just a user interface; it's a complete system linked to a headless CMS database for managing inventory, orders, and reviews.

      Key Features:

      - Bilingual Support: Full interface and direction switching (RTL) between Arabic and English with a single click.

      - Content Management System (CMS): A dedicated Sanity Studio dashboard for managing products, categories, reviews, and legal pages without writing any code.

      - Seamless Shopping Experience: A side-mounted (slide-over) cart that doesn't interrupt the customer's browsing, with real-time updates for quantities and prices.

      - Advanced Search and Filtering: A real-time search system with price and sorting filters that work via URL (for sharing and SEO).

      - Responsive and Luxurious Design: A user interface (UI) built with Shadcn UI and Tailwind v4, featuring a "Dark Mode" design that reflects the brand's identity.

      - SEO & Performance: Comprehensive search engine optimization (Dynamic Metadata, JSON-LD Schema) and optimized images using Next/Image and Sharp.

      Technical Challenges:

      - Building a flexible data structure in Sanity that supports localized fields.

      - Implementing the "Quiet Luxury" design using Tailwind v4 and custom Shadcn components.

      - Efficiently managing the application state for the basket and language using Zustand and Cookies.
    `,
    skills: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Shadcn UI",
      "Sanity.io",
      "Zustand",
    ],
    github: "",
    linkProject: "https://sadeem-store.vercel.app/",
    hasDetailsPage: true,
  },
  {
    id: "7",
    title: "Online Shop",
    image: "/projects/online-shop.png",
    summary:
      "Welcome to our E-Commerce project! This project aims to create a fully functional online shopping platform where users can browse products, add them to their cart, and make purchases. Features => User authentication: Users can sign up and log in to their accounts. Product browsing: Browse through a variety of products categorized by type, brand, or price. Shopping cart: Add products to the cart, update quantities, and proceed to checkout. Checkout process: Enter shipping details, select payment method, and complete the purchase. Order history: View past orders and order details. Technologies => Used Frontend: React, Redux, HTML, CSS, JavaScript, TypeScricpt Backend: Node.js, Express.js, MongoDB Authentication: JSON Web Tokens (JWT) Payment processing: Stripe API Deployment: Heroku",
    skills: ["html", "css", "js", "ts", "react", "node", "express", "mongodb"],
    github: "https://github.com/HeshamEldib/online-shop/",
    linkProject: "https://online-shop-ten-ashen.vercel.app/",
    hasDetailsPage: true,
  },
  {
    id: "1",
    title: "Elzero template three",
    image: "/projects/elzero-template-three.png",
    summary:
      "An application that I made, and concluded it with HTML, CSS and JavaScript",
    skills: ["html", "css", "js"],
    github: "https://github.com/HeshamEldib/Elzero-template-three",
    linkProject: "https://heshameldib.github.io/Elzero-template-three/",
    hasDetailsPage: false,
  },
  {
    id: "5",
    title: "Matching Pictures Game",
    image: "/projects/game.jpg",
    summary:
      "An application that I made, and concluded it with HTML, CSS and JavaScript",
    skills: ["html", "css", "js"],
    github: "https://github.com/HeshamEldib/Matching-Pictures-Game",
    linkProject: "https://heshameldib.github.io/Matching-Pictures-Game/",
    hasDetailsPage: false,
  },
  {
    id: "2",
    title: "Liberty NFT Marketplace",
    image: "/projects/liberty-nft-marketplace.png",
    summary:
      "Liberty NFT Market is a professional website design for NFT related websites. This HTML CSS template.",
    skills: ["html", "css", "js"],
    github: "https://github.com/HeshamEldib/Liberty-NFT-Marketplace",
    linkProject: "https://heshameldib.github.io/Liberty-NFT-Marketplace/",
    hasDetailsPage: false,
  },
  {
    id: "3",
    title: "Cyborg Gaming",
    image: "/projects/cyborg.png",
    summary:
      "Cyborg Gaming is a darkgray color free CSS template based on Bootstrap website layout.",
    skills: ["html", "css", "js"],
    github: "https://github.com/HeshamEldib/Cyborg",
    linkProject: "https://heshameldib.github.io/Cyborg/",
    hasDetailsPage: false,
  },
  {
    id: "4",
    title: "Special Design",
    image: "/projects/special-design.png",
    summary:
      "An application that I made, and concluded it with HTML, CSS and JavaScript",
    skills: ["html", "css", "js"],
    github: "https://github.com/HeshamEldib/Special-Design",
    linkProject: "https://heshameldib.github.io/Special-Design/",
    hasDetailsPage: false,
  },

  {
    id: "6",
    title: "Appyng",
    image: "/projects/appyng.png",
    summary:
      "An application that I made, and concluded it with HTML, CSS & SASS and JavaScript",
    skills: ["html", "css", "sass", "js"],
    github: "https://github.com/HeshamEldib/Appyng",
    linkProject: "https://heshameldib.github.io/Appyng/",
    hasDetailsPage: false,
  },
];
