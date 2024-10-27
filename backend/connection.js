// const mongoose = require('mongoose');
// require('dotenv').config();

// const connectionToDatabase = () => {
//     return mongoose.connect(process.env.MONGO_URL);
// };

// module.exports = {
//     connectionToDatabase,
// }
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this line is included at the top

const connectionToDatabase = async () => {
    try {
        const uri = process.env.MONGODB_URI; // Ensure this is being used correctly
        if (!uri) {
            throw new Error('MONGODB_URI is not defined in the .env file.');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

module.exports = { connectionToDatabase };
