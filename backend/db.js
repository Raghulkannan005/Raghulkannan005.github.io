import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Raghulkannan:9YKCgT4H3OvgzFQS@personal.nhtmd.mongodb.net/?retryWrites=true&w=majority&appName=Personal/PortfolioMessages");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

const messageSchema = new mongoose.Schema({
    Message: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Message = mongoose.model('Message', messageSchema);

await connectDB();

export default {
    Message
};