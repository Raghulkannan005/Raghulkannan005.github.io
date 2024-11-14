import { SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython } from "react-icons/si";

import CarDealImage from "../../Public/Media/Project_Preview/TheCarDeals_Preview.jpg";
import SurveyFormImage from "../../Public/Media/Project_Preview/SurveyForm_Prev.jpg";
import TributePageImage from "../../Public/Media/Project_Preview/TributePage_Preview.jpg";
import PythonDocImage from "../../Public/Media/Project_Preview/PythonDocumentation_Preview.jpg";



const carDealLink = "/Public/Projects/CarDeal/Cardeal.html";
const surveyFormLink = "/Public/Projects/GSF/GymSurveyForm.html";
const tributePageLink = "/Public/Projects/Tribute/apj.html";
const pythonDocLink = "/Public/Projects/PyDoc/PythonDoc.html";



export const hero = {
    hi : ['Hi','Raghul Kannan'],
    titles : ["Full Stack Developer", "UI/UX Designer",  "Photo/Video Editor"],
}

export const skill = [
    {name: "HTML/CSS", icon: SiHtml5, color: "#E44D26"},
    {name: "JavaScript", icon: SiJavascript, color: "#F7DF1E"},
    {name: "React", icon: SiReact, color: "#61DAFB"},
    {name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4"},
    {name: "Bootstrap", icon: SiBootstrap, color: "#7952B3"},
    {name: "Node.js", icon: SiNodedotjs, color: "#339933"},
    {name: "Express.js", icon: SiExpress, color: "#000000"},
    {name: "MongoDB", icon: SiMongodb, color: "#47A248"},
    {name: "SQL", icon: SiMysql, color: "#4479A1"},
    {name: "Python", icon: SiPython, color: "#3776AB"}
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
	}
];
