import { useTheme } from '../context/ThemeContext';
import ragImg3 from "/Media/Raghul/rag-3.jpg";
import greenTea from "/Media/greenTeaForest.mp3";

const Hero = () => {
    const { darkMode } = useTheme();
    
    return (
        <div className={`h-screen w-full z-40 flex flex-wrap ${darkMode ? 'bg-gradient-to-b from-[#010308] to-[#000328]' : 'bg-gradient-to-b from-gray-100 to-white'}`} id="hero">
            <audio controls autoPlay loop className="mt-20 hidden">
                <source src={greenTea} type="audio/mp3" />
            </audio>

            <div className={`${darkMode ? 'text-white' : 'text-gray-800'} font-bold font-signi w-full flex flex-col justify-center items-center mt-32 lg:w-1/2 lg:mt-0`}>
                <span className="animate-gradient bg-clip-text text-5xl text-transparent text-center lg:text-start w-3/4">Raghul Kannan</span>
                <span className="font-signi text-yellow-600 text-lg m-4 lg:text-start text-center w-3/4">CODE CRAFTSMAN</span>
                <span className={`font-rubi ${darkMode ? 'text-white/40' : 'text-gray-600'} text-lg m-4 lg:text-start text-center w-3/4`}>
                    Specialized In Full Stack Development Who Makes People&apos;s Life Easier By Creating Magical Websites.
                </span>
            </div>
            <div className="flex justify-center items-center w-full lg:w-1/2">
                <img src={ragImg3} alt="Raghul's Image" className="sm:h-64 h-52 rounded-xl"/>
            </div>
        </div>
    );
};

export default Hero;
