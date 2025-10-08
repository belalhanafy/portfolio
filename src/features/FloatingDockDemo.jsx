import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { HiOutlineCode } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { RiGithubLine } from "react-icons/ri";
import { SiFreelancer } from "react-icons/si"; // optional icon substitute

export function FloatingDockDemo() {
  const links = [
    {
      title: "Facebook",
      icon: <SlSocialFacebook className="w-full h-full text-blue-500" />,
      href: "https://www.facebook.com/belal",
    },
    {
      title: "GitHub",
      icon: (
        <RiGithubLine
          className="w-full h-full text-gray-300"
          style={{ filter: "drop-shadow(0 0 3px white)" }}
        />
      ),
      href: "https://github.com/belal",
    },
    {
      title: "LinkedIn",
      icon: <FiLinkedin className="w-full h-full text-blue-600" />,
      href: "https://www.linkedin.com/in/belal",
    },
    {
      title: "Portfolio",
      icon: (
        <RxPerson
          className="w-full h-full text-gray-300"
          style={{ filter: "drop-shadow(0 0 3px white)" }}
        />
      ),
      href: "#portfolio",
    },
    {
      title: "Codeforces",
      icon: <HiOutlineCode className="w-full h-full text-purple-500" />,
      href: "https://codeforces.com/profile/belal",
    },
    {
      title: "khamsat",
      icon: (
        <SiFreelancer
          className="w-full h-full text-cyan-400"
          style={{ filter: "drop-shadow(0 0 3px cyan)" }}
        />
      ),
      href: "https://khamsat.com/user/belal_hanafy_311",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full mt-8">
      <FloatingDock items={links} />
    </div>
  );
}
