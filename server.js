// DEPENDENCIES
const express = require('express');
const app = express();
const yelpController = require('./controllers/yelpController')

// CONFIGURATION AND MIDDLEWARE
require('dotenv').config();
app.use(express.json());

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Pley'
    });
});

// CONTROLLERS
app.use("/api", yelpController)

// LISTEN
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

