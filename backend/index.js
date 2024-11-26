// backend/index.js
import express from 'express';
import db from './db.js';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

// CORS configuration
app.use(cors({
    origin: ['https://raghulkannan.vercel.app']  // Make sure this is correct
}));

app.use(express.json());

// Rate limiting configuration
const messageLimiter = rateLimit({
    windowMs: 60 * 10 * 1000, // 10 min window
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'You have exceeded the 100 messages in 10 min limit!',
    headers: true,
});

// Admin credentials
const ADMIN_CREDENTIALS = [
    { id: 'raghul', password: 'praishathango' },
    { id: 'praisha', password: 'raghuletta' } 
];

// Apply the rate limiting middleware to the /api/sendMsg endpoint
app.post('/api/sendMsg', messageLimiter, async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).send('Message is required');
        }

        // Create new message with correct schema field name
        const newMessage = new db.Message({
            Message: message // Capitalize M to match schema
        });

        await newMessage.save();
        res.status(200).send('Message saved successfully');
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).send(`Error saving message: ${err.message}`);
    }
});

app.post("/api/admin", async (req, res) => {
    console.log("Received admin request", req.body);  // Add this log for debugging
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
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});