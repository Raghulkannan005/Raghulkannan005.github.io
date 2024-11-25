import { HiOutlineMail } from "react-icons/hi";
import { useTheme } from '../context/ThemeContext';  // Fix import path

const Contact = () => {
    const { darkMode } = useTheme();
    
    return (
        <div className={`h-screen w-full flex flex-col justify-center items-center ${darkMode ? 'bg-gradient-to-b from-[#0a192f] to-black' : 'bg-gradient-to-b from-[#86a2ee] to-gray-300'}`} id="contact">
            <div className={`${darkMode? 'text-white' :'text-black'} text-4xl text-center font-bold mb-4`}>
            Let&apos;s Create Something Amazing Together! 🚀
            </div>
            <div className={`font-signi ${darkMode? 'text-white' :'text-black'} text-lg max-w-2xl text-center px-4`}>
            Ready to turn your innovative ideas into reality? I&apos;m here to help!
            </div>
            
            <div className={`font-signi ${darkMode? 'text-white' :'text-black'} text-lg max-w-2xl text-center px-4`}>
            Don&apos;t miss out - Reach out now and lets build something Extraordinary! ✨
            </div>

        <div className="mt-8 flex items-center">
            <a href="mailto:raghulkannan005@gmail.com" className={`${ darkMode?'text-white hover:text-gray-300':'text-black hover:text-gray-600'} flex items-center`}>
            <HiOutlineMail size={30} />
            
            <span className={`${darkMode? 'text-white' :'text-black'} ml-2`}>raghulkannan005@gmail.com</span>

            </a>
        </div>

        <div className="mt-8 w-full max-w-md px-4 ">
            <form className="flex flex-col items-center">
            <textarea
                name="message"
                className="w-full p-2 mb-4 text-black rounded-lg resize -none"
                rows="4"
                placeholder="Write your message here..."
                required
            />
            <button
                type="submit"
                className={` px-6 py-3 rounded-lg text-white hover:scale-105 duration-200 ${darkMode ? 'bg-gradient-to-r w-2/5 from-cyan-500 to-blue-500' : 'bg-gradient-to-r w-2/5 from-cyan-700 to-blue-700'}`}
            >
                Send Message
            </button>
            </form>
        </div>
        </div>
    );
};

export default Contact;