// src/Components/contact.jsx
import { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { useTheme } from '../context/ThemeContext';

const Contact = ({onlyIfOpenToggle}) => {
    const { darkMode } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        const apiUrl = "https://raghulkannan-backend.vercel.app/api/sendMsg";


        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: e.target.message.value
                })
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                e.target.reset();
            } else if (response.status === 429) {
                const errorData = await response.json();
                setStatus(errorData.message);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (

    <section onClick={onlyIfOpenToggle} className={`min-h-screen relative w-full flex flex-col justify-text-white items-center ${darkMode ? 'bg-gradient-to-b from-[#0a192f] to-black' : 'bg-gradient-to-b from-[#86a2ee] to-[#75b7f5]'}`} id="contact" >

        <div className='flex flex-col min-h-[90vh] justify-center items-center'>

            <div className= "text-yellow-300 text-3xl sm:text-4xl font-signi mt-24 px-6 text-center font-bold mb-4 cursor-default">
                Let&apos;s Create Something Amazing Together! <span className="hover:rotate-180 duratio-75">🚀</span>
            </div>

            <div className={` ${darkMode? 'text-white' :'text-black'} sm:text-lg font-signi max-w-2xl font-light text-center pt-6 px-8 cursor-default`}>
                Ready to turn your innovative ideas into reality? I&apos;m here to help!
            </div>

            <div className={` ${darkMode? 'text-white' :'text-black'} text-base sm:text-lg font-signi max-w-2xl font-light text-center px-8 cursor-copy`}>
                Don&apos;t miss out - Reach out now and lets build something Extraordinary! ✨
            </div>

            <div className="mt-8 flex items-center">
                <a href="mailto:raghulkannan005@gmail.com" className={`${ darkMode?'text-white hover:text-red-200':'text-black hover:text-gray-700'} flex items-center`}>
                <HiOutlineMail size={30} />

                <span className={`${darkMode? 'text-white' :'text-black'} text-base sm:text-lg font-rubi ml-2`}>raghulkannan005@gmail.com</span>

                </a>
            </div>

            <div className="mt-8 w-full max-w-md px-4">
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <textarea
                        name="message"
                        className="w-2/3 sm:w-full p-2 sm:h-28 h-20 mb-4 text-black rounded-lg resize-none"
                        rows="4"
                        placeholder="Write your message here..."
                        maxLength={20000}
                        required
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`p-3 rounded-lg text-white hover:scale-105 m-2 duration-75 ${
                            darkMode ? 'bg-gradient-to-r w-2/5 from-cyan-500 to-blue-500'
                            : 'bg-gradient-to-r w-2/5 from-cyan-700 to-blue-700'
                        } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-crosshair'}`}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                    {status && (
                        <p className={`mt-4 text-center ${status.includes('Failed') || status.includes('exceeded') ? 'text-red-500' : 'text-green-500'}`}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </div>
            <footer className={` ${darkMode?'bg-black/60':'bg-white/10'} w-full h-[5%] flex flex-col items-center`}>
                <div className={`text-xl ${darkMode ? 'text-white' : 'text-black'} font-rubi mt-2 flex items-center`}>
                <a href="https://github.com/Raghulkannan005" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 m-2">
                        <svg height="20" viewBox="0 0 16 16" version="1.1" width="20" aria-hidden="true" fill="currentColor">
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                        <span className="ml-2 text-sm sm:text-xl">Github</span>
                    </a>
                    <a href="https://twitter.com/raghulkannan_" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 m-2 ">
                        <svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span className="ml-2 text-sm sm:text-xl">Twitter</span>
                    </a>
                    <a href="https://www.linkedin.com/in/raghul-kannan-0a4968242" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-400 m-2">
                        <svg height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                        </svg>
                        <span className="ml-2 text-sm sm:text-xl">LinkedIn</span>
                    </a>
                </div>
                <div className="mt-8 ">
                    <a href="/admin" target="_blank" >
                        <button className="px-6 py-3 rounded-3xl text-white bg-red-700 hover:scale-105 duration-100">Admin</button>
                    </a>
                </div>
            </footer>
    </section>
    );
};

export default Contact;