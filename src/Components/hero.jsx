import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = ({onlyIfOpenToggle}) => {
    const { darkMode } = useTheme();
    const BASE_URL = import.meta.env.BASE_URL;

    useEffect(() => {
        const audioElement = document.getElementById('background-audio');
        if (audioElement) {
            audioElement.volume = 0.2; // Set default volume to 0.3
        }
    }, []);

    return (
        <main onClick={onlyIfOpenToggle} className={`min-h-screen pt-4 z-40 flex flex-wrap ${darkMode ? 'bg-gradient-to-b from-[#010308] to-[#000328]' : 'bg-gradient-to-b from-[#7bbfff] to-[#657cff]'}`} id="hero">
            <audio id="background-audio" controls autoPlay loop className="mt-20 hidden">
                <source src={`${BASE_URL}Media/greenTeaForest.mp3`} type="audio/mp3" />
            </audio>

            <div className={`${darkMode ? 'text-white' : 'text-gray-800'} font-bold font-signi w-full flex flex-col justify-center items-center mt-32 lg:w-1/2 lg:mt-0`}>
                <span className={`animate-Gradient z-40 bg-clip-text text-5xl text-transparent text-center xs:h-[70px] lg:text-start w-3/4`}>Raghul Kannan</span>
                <span className="font-signi text-yellow-500 sm:mt-0 text-lg m-4 lg:text-start text-center w-3/4">CODE CRAFTSMAN</span>
                <span className={`font-rubi ${darkMode ? 'text-white/40' : 'text-black/60'} text-lg m-4 lg:text-start text-center w-3/4`}>
                    Specialized In Full Stack Development Who Makes People&apos;s Life Easier By Creating Magical Websites.
                </span>
            </div>
            <div className="flex justify-center items-center w-full lg:w-1/2">
                <img src="/Media/Raghul/rag-3.jpg" alt="Raghul's Image" className={` ${darkMode?'hover:bg-slate-300':'hover:bg-[#121a3b]'} hover:shadow-md hover:scale-105 transition duration-300 ease-in-out hover:shadow-blue-500 sm:h-64 h-52 rounded-xl`} loading="lazy"/>
            </div>
        </main>
    );
};

export default Hero;
