// This is a simplified example to show the structure

// Assuming you are using Node.js and Express
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory

// Set up routes
app.get('/', (req, res) => {
  // Render the home page HTML
  res.sendFile(__dirname + '/public/index.html');
});

// Add more routes for login, registration, profile, viewing posts, etc.

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
