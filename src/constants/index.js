import typescriptImg from "@/assets/images/typescript-svgrepo-com.svg";
import tailwindImg from "@/assets/images/tailwindcss-icon-svgrepo-com.svg";
import reactImg from "@/assets/images/react-svgrepo-com.svg";
import html from "@/assets/images/html-5-svgrepo-com.svg";
import css from "@/assets/images/css-3-svgrepo-com.svg";
import js from "@/assets/images/js-svgrepo-com.svg";
import materialImg from "@/assets/images/material-ui-svgrepo-com.svg";
import shadcnImg from "@/assets/images/shadcn.png";
import uiverse from "@/assets/images/uiverse.jpeg";
import clerk from "@/assets/images/clerk.jpeg";
import nivo from "@/assets/images/NIVO.png";
import gsap from "@/assets/images/gsap.png";
import threeJs from "@/assets/images/threejs.png";
import parallelx from "@/assets/images/parallelx.png";
import Ecommerce from "@/assets/images/e-commerce.png";
import akira from "@/assets/images/akira.png";
import brainwaveai from "@/assets/images/brainwaveai.png";
import airesumebuilder from "@/assets/images/airesumebuilder.png";
import dashboard from "@/assets/images/dashboard.png";
import apple from "@/assets/images/apple.png";
import firebase from "@/assets/images/Firebase Logo.png";
import chatty from "@/assets/images/chatty.png";
export const projects = [
    {
        id: 1,
        title: "Fresh Cart",
        des: "a full-featured e-commerce website with cart, wishlist, authentication, backend integration via Axios, and checkout using Stripe. It also includes a forgot password feature for account recovery",
        img: Ecommerce,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 3,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 4,
                name: "JavaScript",
                image: js,
            },
            {
                id: 5,
                name: "UIverse",
                image: uiverse,
            },
        ],
        link: "https://fresh-cart-task.vercel.app/",
    },
    {
        id: 2,
        title: "AI Resume Builder",
        des: "A React-based frontend web application for building and customizing CVs. This project allows users to create, edit, and download their CVs easily, featuring various templates and styling options.",
        img: airesumebuilder,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "TypeScript",
                image: typescriptImg,
            },
            {
                id: 4,
                name: "shadcn",
                image: shadcnImg,
            },
            {
                id: 5,
                name: "clerk",
                image: clerk,
            },
        ],
        link: "https://ai-resume-builder-eosin-chi.vercel.app/",
    },
    {
        id: 3,
        title: "Admin Dashboard",
        des: "An advanced admin dashboard for managing users, analytics, and system settings. It includes real-time data visualization, role-based access control, and a responsive design for seamless user experience.",
        img: dashboard,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "JavaScript",
                image: js,
            },
            {
                id: 4,
                name: "Material UI",
                image: materialImg,
            },
            {
                id: 5,
                name: "Nivo",
                image: nivo,
            },
        ],
        link: "https://admin-dashboard-psi-orpin.vercel.app/",
    },
    {
        id: 4,
        title: "BrainWave AI",
        des: "BrainWave AI is a modern website built with React, Tailwind CSS, and Vite, featuring smooth parallax effects with react-just-parallax, seamless navigation using React Router, and enhanced user experience with optimized performance",
        img: brainwaveai,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "JavaScript",
                image: js,
            },
            {
                id: 4,
                name: "react-just-parallelx",
                image: parallelx,
            },
        ],
        link: "https://brainwave-ai-kappa.vercel.app/",
    },
    {
        id: 5,
        title: "IPhone",
        des: "An Apple-inspired website built with React, Three.js, and GSAP, featuring immersive 3D visuals, smooth animations, and a seamless user experience enhanced with React Drei and React Icons.",
        img: apple,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "TypeScript",
                image: typescriptImg,
            },
            {
                id: 4,
                name: "GSAP",
                image: gsap,
            },
            {
                id: 5,
                name: "three Js",
                image: threeJs,
            },
        ],
        link: "https://i-phone-eta.vercel.app/",
    },

    {
        id: 6,
        title: "Akira",
        des: "Akira is a complete e-commerce website built with HTML, CSS, and JavaScript, featuring a dynamic shopping cart, wishlist functionality, and a user-friendly interface for a smooth shopping experience",
        img: akira,
        iconLists: [
            {
                id: 1,
                name: "HTML",
                image: html,
            },

            {
                id: 2,
                name: "CSS",
                image: css,
            },
            {
                id: 3,
                name: "JavaScript",
                image: js,
            },
        ],
        link: "https://akira-theta.vercel.app/",
    },
    {
        id: 7,
        title: "Chatty",
        des: "Chatty is a real-time chat app powered by Firebase, featuring user authentication, avatars, media sharing (images, videos, documents), voice messages, message seen status, and a modern responsive UI for smooth conversations.",
        img: chatty, 
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },
            {
                id: 3,
                name: "Tailwind CSS",
                image: tailwindImg,
            },
            {
                id: 2,
                name: "Firebase",
                image: firebase,
            },
        ],
        link: "https://chat-app-mu-steel-99.vercel.app/",
    }

];
