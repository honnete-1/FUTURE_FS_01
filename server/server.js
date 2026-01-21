const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to Database
// Database connection is handled before server start


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: "*", // Allow all origins for this project
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));
app.use(express.json());


// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect to Database and start server
connectDB().then(() => {
    if (process.env.NODE_ENV !== 'production') {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
});

module.exports = app;
