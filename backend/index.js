import express from 'express';
import db from './db.js';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

// CORS configuration
app.use(cors({
    origin: ['https://raghulkannan.vercel.app', "http://localhost:5173"],
}));
app.use(express.json());

// Rate limiting configuration
const messageLimiter = rateLimit({
    windowMs: 60 * 10 * 1000, // 10 min window
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'You have exceeded the 100 messages in 10 min limit!',
    headers: true,
});

const ADMIN_CREDENTIALS = [
    { id: 'raghul', password: 'praisha' },
    { id: 'praisha', password: 'raghul' } 
];

app.post('/api/sendMsg', messageLimiter, async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).send('Message is required');
        }

        const newMessage = new db.Message({
            Message: message
        });

        await newMessage.save();
        res.status(200).send('Message saved successfully');
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).send(`Error saving message: ${err.message}`);
    }
});

app.post("/api/admin", async (req, res) => {
    const { id, password } = req.body;
    const isAdmin = ADMIN_CREDENTIALS.some(cred => cred.id === id && cred.password === password);
    if (isAdmin) {
        try {
            const messages = await db.Message.find();
            res.status(200).send(messages);
        } catch (err) {
            res.status(500).send('Error getting messages: ' + err);
        }
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Port configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});