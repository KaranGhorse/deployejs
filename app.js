// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
// const ejs = require('ejs');

// Initialize Express app
const app = express();

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        profession: 'Software Engineer'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        profession: 'Data Scientist'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        profession: 'Web Developer'
    },
    {
        id: 4,
        name: 'Bob Brown',
        email: 'bob@example.com',
        profession: 'Graphic Designer'
    },
    {
        id: 5,
        name: 'Emily Davis',
        email: 'emily@example.com',
        profession: 'Marketing Specialist'
    },
    {
        id: 6,
        name: 'Michael Wilson',
        email: 'michael@example.com',
        profession: 'Financial Analyst'
    },
    {
        id: 7,
        name: 'Samantha Martinez',
        email: 'samantha@example.com',
        profession: 'UI/UX Designer'
    },
    {
        id: 8,
        name: 'David Taylor',
        email: 'david@example.com',
        profession: 'Project Manager'
    },
    {
        id: 9,
        name: 'Olivia Anderson',
        email: 'olivia@example.com',
        profession: 'Content Writer'
    },
    {
        id: 10,
        name: 'Daniel Thomas',
        email: 'daniel@example.com',
        profession: 'HR Manager'
    }
];


app.get('/', async (req, res) => {
    try {
        res.render('index',{users});
    } catch (error) {
        console.error('Error retrieving data:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server using environment variable for port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
