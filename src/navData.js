import React from "react";
import { FaGithub, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/parse-excel",
    text: "home",
  },
  {
    id: 2,
    url: "/get-rows",
    text: "get rows",
  },
  {
    id: 3,
    url: "/get-headers",
    text: "get headers",
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/munisides",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://munisides.github.io/",
    icon: <FaGlobeAmericas />,
  },
];
