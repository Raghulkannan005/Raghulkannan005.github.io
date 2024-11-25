import { skill } from "./constants.js";
import { useTheme } from '../context/ThemeContext';

const About = () => {
    const { darkMode } = useTheme();
    return (
        <div className={`min-h-screen w-full p-20 flex flex-col justify-center items-center ${darkMode ? 'bg-gradient-to-b from-[#000328] to-[#014449]' : 'bg-gradient-to-b from-[#657cff] to-[#98d4d8]'}`} id="about">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} font-rubi text-xl text-center mb-8`}>
                Technologies and tools I&apos;ve worked with
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
                {skill.map((prop, index) => (
                    <div key={index} 
                        className={`p-3 m-4 ${darkMode ? 'bg-white/10 text-white hover:shadow-cyan-500/50 hover:bg-white/20' : 'bg-gray-200 text-gray-800 hover:shadow-blue-800/50 hover:bg-gray-300'} rounded-md font-rubi flex text-center transition-all duration-50 ease-in-out hover:scale-110 hover:shadow-lg  cursor-pointer`}>
                        <div className="flex justify-center text-2xl items-center" style={{color: prop.color}}><prop.icon/></div>
                        <div className="mx-2 text-lg">{prop.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
