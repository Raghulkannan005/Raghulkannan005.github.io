import { HiOutlineMail } from "react-icons/hi";
import { useState } from 'react';
import axios from 'axios';
const Contact = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
        const [status, setStatus] = useState('');

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://your-backend-url/api/messages', formData);
                if (response.data.success) {
                    setStatus('Message sent successfully');
                    setFormData({ name: '', email: '', message: '' });
                }
            } catch (error) {
                console.error('Error sending message:', error);
                setStatus('Error sending message');
            }
        };

        return (
            <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#0a192f] to-black" id="contact">
                <div className="text-white text-4xl text-center font-bold mb-4">
                    Let's Create Something Amazing Together! 🚀
                </div>
                <div className="font-signi text-white text-lg max-w-2xl text-center px-4">
                    Ready to turn your innovative ideas into reality? I'm here to help!
                </div>
                <div className="font-signi text-white text-lg max-w-2xl text-center px-4">
                    Don't miss out - reach out now and let's build something extraordinary! ✨
                </div>
                <div className="mt-8 flex items-center">
                    <a href="mailto:raghulkannan005@gmail.com" className="text-white hover:text-gray-300 flex items-center">
                        <HiOutlineMail size={30} />
                        <span className="ml-2">raghulkannan005@gmail.com</span>
                    </a>
                </div>
                <div className="mt-8 w-full max-w-md px-4">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 mb-4 text-black rounded-lg"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 mb-4 text-black rounded-lg"
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 mb-4 text-black rounded-lg resize-none"
                            rows="4"
                            placeholder="Write your message here..."
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-white hover:scale-105 duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                    {status && <p className="text-white mt-4 text-center">{status}</p>}
                </div>
            </div>
        );
};

export default Contact;