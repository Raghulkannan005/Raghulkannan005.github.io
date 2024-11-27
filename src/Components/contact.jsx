// src/Components/contact.jsx
import { useEffect, useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
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
        <div className={`h-screen w-full flex flex-col justify-center items-center ${darkMode ? 'bg-gradient-to-b from-[#0a192f] to-black' : 'bg-gradient-to-b from-[#86a2ee] to-[#75b7f5]'}`} id="contact">
            <div className={`${darkMode? 'text-white' :'text-black'} text-4xl px-6 text-center font-bold mb-4`}>
            Let&apos;s Create Something Amazing Together! 🚀
            </div>
            <div className={`font-signi ${darkMode? 'text-white' :'text-black'} text-lg max-w-2xl text-center px-5`}>
            Ready to turn your innovative ideas into reality? I&apos;m here to help!
            </div>

            <div className={`font-signi ${darkMode? 'text-white' :'text-black'} text-lg max-w-2xl text-center px-5`}>
            Don&apos;t miss out - Reach out now and lets build something Extraordinary! ✨
            </div>

            <div className="mt-8 flex items-center">
                <a href="mailto:raghulkannan005@gmail.com" className={`${ darkMode?'text-white hover:text-gray-400':'text-black hover:text-gray-700'} flex items-center`}>
                <HiOutlineMail size={30} />

                <span className={`${darkMode? 'text-white' :'text-black'} ml-2`}>raghulkannan005@gmail.com</span>

                </a>
            </div>

            <div className="mt-8 w-full max-w-md px-4">
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <textarea
                        name="message"
                        className="w-full p-2 mb-4 text-black rounded-lg resize-none"
                        rows="4"
                        placeholder="Write your message here..."
                        maxLength={20000}
                        required
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`px-6 py-3 rounded-lg text-white hover:scale-105 duration-200 ${
                            darkMode ? 'bg-gradient-to-r w-2/5 from-cyan-500 to-blue-500' 
                            : 'bg-gradient-to-r w-2/5 from-cyan-700 to-blue-700'
                        } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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

            <div className="mt-8">
                <a href="/admin" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-200">
                        Admin
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Contact;