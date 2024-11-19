import { FaPhp, FaPython, FaLaravel, FaWordpress, FaReact, FaVuejs, FaBootstrap, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaDocker, FaAws, FaUnity } from "react-icons/fa6";
import { SiLumen, SiCodeigniter, SiCakephp, SiMysql, SiAmazondynamodb, SiDart, SiFlutter, SiLivewire, SiTypescript, SiTailwindcss, SiAuth0, SiMicrosoftazure, SiPlangrid, SiSinglestore } from "react-icons/si";
import { DiRedis, DiJavascript } from "react-icons/di";
import { TbBrandReactNative, TbBrandRedux, TbBrandInertia, TbBrandNuxt, TbBrandOauth, TbDatabase, TbFileDatabase, TbBrandGoogleFilled } from "react-icons/tb";
import { GiArtificialHive } from "react-icons/gi";

const colors = [
    'rose',
    'blue',
    'sky',
    'cyan',
    'teal',
    'emerald',
    'green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'red',
    'stone',
    'neutral',
    'slate',
];
  
export const technologies = [
    {
        id: 1,
        title: "Backend & APP",
        showSectionTitle: true,
        tools: [
            {
                id: 1,
                name: "PHP",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaPhp,
            },
            {
                id: 2,
                name: "Laravel",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaLaravel,
            },
            {
                id: 3,
                name: "Lumen",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiLumen,
            },
            {
                id: 4,
                name: "Codeigniter",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiCodeigniter,
            },
            {
                id: 5,
                name: "CakePHP",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiCakephp,
            },
            {
                id: 6,
                name: "WordPress",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaWordpress,
            },
            {
                id: 7,
                name: "MySQL",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiMysql,
            },
            {
                id: 8,
                name: "Redis",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: DiRedis,
            },
            {
                id: 9,
                name: "DynamoDB",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiAmazondynamodb,
            },
            {
                id: 11,
                name: "Flutter",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiFlutter,
            },
            {
                id: 12,
                name: "React Native",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: TbBrandReactNative,
            },
            {
                id: 13,
                name: "Python",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaPython,
            },
        ],
    },
    {
        id: 2,
        title: "Frontend Developement",
        showSectionTitle: true,
        tools: [
            {
                id: 1,
                name: "JavaScript",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: DiJavascript,
            },
            {
                id: 2,
                name: "React",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaReact,
            },
            {
                id: 3,
                name: "Redux",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: TbBrandRedux,
            },
            {
                id: 4,
                name: "Inertia",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: TbBrandInertia,
            },
            {
                id: 5,
                name: "Vue",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaVuejs,
            },
            {
                id: 6,
                name: "Nuxt",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: TbBrandNuxt,
            },
            {
                id: 7,
                name: "Livewire",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiLivewire,
            },
            {
                id: 8,
                name: "Filament",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: DiRedis,
            },
            {
                id: 9,
                name: "TypeScript",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiTypescript,
            },
            {
                id: 10,
                name: "Tailwind",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiTailwindcss,
            },
            {
                id: 11,
                name: "Bootstrap",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaBootstrap,
            },
            {
                id: 12,
                name: "HTML5",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaHtml5,
            },
            {
                id: 13,
                name: "CSS3",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaCss3Alt,
            },
        ],
    },
    {
        id: 3,
        title: "Tools",
        showSectionTitle: true,
        tools: [
            {
                id: 1,
                name: "Docker",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaDocker,
            },
            {
                id: 2,
                name: "AWS",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaAws,
            },
            {
                id: 3,
                name: "UnitTest",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaUnity,
            },
            {
                id: 4,
                name: "Auth0",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiAuth0,
            },
            {
                id: 5,
                name: "Azure OpenAI",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiMicrosoftazure,
            },
            {
                id: 6,
                name: "LangChain",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: SiPlangrid,
            },
            {
                id: 7,
                name: "ChatGPT",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: GiArtificialHive,
            },
            {
                id: 8,
                name: "OAuth",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: TbBrandOauth,
            },
            {
                id: 9,
                name: "Store Procedure",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: TbDatabase,
            },
            {
                id: 10,
                name: "File Cache",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: TbFileDatabase,
            },
            {
                id: 11,
                name: "Google API",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: TbBrandGoogleFilled,
            },
            {
                id: 12,
                name: "Git",
                color: `text-${colors[Math.floor((Math.random() * 16))]}-800`,
                icon: FaGitAlt,
            },
        ],
    },
];
  