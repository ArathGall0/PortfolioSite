const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Serve HTML, CSS, and JavaScript files
app.use(express.static('public'));

// Example endpoints for user registration and login
app.post('/register', (req, res) => {
    // Handle user registration logic here
    // You can use a database to store user data
    // Example: create a new user record in the database
    console.log('User registered:', req.body.username);
    res.sendStatus(200);
});

app.post('/login', (req, res) => {
    // Handle user login logic here
    // Example: validate user credentials and generate a session token
    console.log('User logged in:', req.body.username);
    res.sendStatus(200);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
