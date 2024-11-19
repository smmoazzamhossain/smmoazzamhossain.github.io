import {
    BiLinkExternal,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiLogoStackOverflow,
} from "react-icons/bi";

import { FaSquareXTwitter} from "react-icons/fa6";
import { TbBrandFiverr, TbBrandGmail, TbBrandUpwork } from "react-icons/tb";
  
export const socialLinks = [
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/smmoazzamhossain",
        icon: BiLogoGithub,
        status: "social",
    },
    {
        id: 2,
        name: "Linkedin",
        url: "https://linkedin.com/in/enmoazzam",
        icon: BiLogoLinkedinSquare,
        status: "social",
    },
    {
        id: 3,
        name: "X",
        url: "https://twitter.com/enmoazzam",
        icon: FaSquareXTwitter,
        status: "social",
    },
    {
        id: 4,
        name: "Instagram",
        url: "https://instagram.com/victorekea",
        icon: BiLogoInstagram,
        status: "social",
    },
    {
        id: 5,
        name: "Daily.dev",
        url: "https://app.daily.dev/enmoazzam",
        icon: BiLinkExternal,
        status: "social",
    },
    {
        id: 6,
        name: "Stackoverflow",
        url: "https://stackoverflow.com/users/9750910/moazzam-hossain",
        icon: BiLogoStackOverflow,
        status: "social",
    },
    {
        id: 7,
        name: "Gmail",
        url: "mailto:en.moazzam@gmail.com",
        icon: TbBrandGmail,
        status: "social",
    },
    {
        id: 8,
        name: "Fiverr",
        url: "https://www.fiverr.com/coderxi",
        icon: TbBrandFiverr,
        status: "social",
    },
    {
        id: 9,
        name: "Upwork",
        url: "https://www.upwork.com/enmoazzam",
        icon: TbBrandUpwork,
        status: "social",
    },
];
  