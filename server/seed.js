const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project'); // Correct path relative to server/seed.js

dotenv.config(); // Load .env from current directory (server/)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected for Seeding...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const seedProjects = [
    {
        title: 'Submission Reminder App',
        description: 'A reminder app developed with Shell Scripting.',
        tech_stack: ['Shell Scripting', 'Linux Commands', 'Automation'],
        link: 'https://github.com/honnete-1/submission_reminder_app_honnete-1',
        image_url: '/assets/project1.png'
    },
    {
        title: 'Personal Expense Tracker',
        description: 'Track your daily expenses easily via CLI.',
        tech_stack: ['Python', 'CLI', 'Data Management'],
        link: 'https://github.com/honnete-1/Lab3-Personal-Expense-Tracker_honnete-1',
        image_url: '/assets/project2.png'
    },
    {
        title: 'Mini Shop',
        description: 'Upcoming full stack development project.',
        tech_stack: ['In Development'],
        link: 'https://github.com/honnete-1/FUTURE_FS_02',
        image_url: '/assets/project3.png'
    },
    {
        title: 'Rebranded Website',
        description: 'Upcoming software solution.',
        tech_stack: ['In Development'],
        link: 'https://github.com/honnete-1/FUTURE_FS_03',
        image_url: '/assets/project4.png'
    }
];

const importData = async () => {
    try {
        await connectDB();
        await Project.deleteMany(); // Clear existing
        await Project.insertMany(seedProjects);
        console.log('Data Imported!');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    // destroyData(); 
} else {
    importData();
}
