// src/Components/AdminLogin.jsx
import { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const AdminLogin = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = process.env.NODE_ENV === 'production' 
            ? 'https://raghulkannan.vercel.app/api/admin' 
            : 'http://localhost:3000/api/admin';

        try {
            const response = await axios.post(apiUrl, { id, password });
            setMessages(response.data);
            setError('');
        } catch (err) {
            setError('Unauthorized or error fetching messages');
            console.log(err);
            setMessages([]);
        }
    };

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#86a2ee] to-[#75b7f5]">
            <h2 className="text-4xl font-bold mb-4">Admin Login</h2>
            {!messages.length > 0 && (
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Admin ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="mb-4 p-2 rounded-lg"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 p-2 rounded-lg"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-200"
                    >
                        Login
                    </button>
                </form>
            )}
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {messages.length > 0 && (
                <div className="mt-8 w-full max-w-2xl px-4">
                    <h3 className="text-2xl font-bold mb-4">Messages</h3>
                    <ul className="space-y-4">
                        {messages.map((message, index) => (
                            <li key={index} className="p-4 border rounded-lg bg-white shadow-md">
                                <p className="text-lg font-semibold">{message.Message}</p>
                                <p className="text-sm text-gray-500">
                                    {moment(message.createdAt).format('DD MMMM YYYY, h:mm:ss a')}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AdminLogin;