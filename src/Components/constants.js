import { SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb,SiGit, SiMysql, SiPython } from "react-icons/si";

const BASE_URL = import.meta.env.BASE_URL;

const CarDealImage = `${BASE_URL}Media/Project_Preview/TheCarDeals_Preview.jpg`;
const SurveyFormImage = `${BASE_URL}Media/Project_Preview/SurveyForm_Prev.jpg`;
const TributePageImage = `${BASE_URL}Media/Project_Preview/TributePage_Preview.jpg`;
const PythonDocImage = `${BASE_URL}Media/Project_Preview/PythonDocumentation_Preview.jpg`;
const OldPortImage = `${BASE_URL}Media/Project_Preview/OldPortPrev.jpg`;

const carDealLink = `${BASE_URL}Projects/CarDeal/Cardeal.html`;
const surveyFormLink = `${BASE_URL}Projects/GSF/GymSurveyForm.html`;
const tributePageLink = `${BASE_URL}Projects/Tribute/apj.html`;
const pythonDocLink = `${BASE_URL}Projects/PyDoc/PythonDoc.html`;
const OldPortfolioLink = `${BASE_URL}Projects/OldPortfolio/OldPort.html`;

export const hero = {
    hi: ['Hi', 'Raghul Kannan'],
    titles: ["Full Stack Developer", "UI/UX Designer", "Photo/Video Editor"],
};

export const skill = [
    { name: "HTML/CSS", icon: SiHtml5, color: "#E44D26" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Git", icon: SiGit, color: "#F05032" }
];

export const projects = [

    {
        name: "Junior Car Deals",
        link: carDealLink,
        image: CarDealImage,
        alt: "Car Deals Website"
    },
    {
        name: "Gym Survey Form",
        link: surveyFormLink,
        image: SurveyFormImage,
        alt: "Gym Survey Form"
    },
    {
        name: "Tribute Page",
        link: tributePageLink,
        image: TributePageImage,
        alt: "Tribute Page"
    },
    {
        name: "Python Documentation",
        link: pythonDocLink,
        image: PythonDocImage,
        alt: "Python Documentation"
    },
    {
        name: "Prior Portfolio",
        link: OldPortfolioLink,
        image: OldPortImage,
        alt: "Old Portfolio"
    }
];
