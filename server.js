// DEPENDENCIES
const express = require('express');
const app = express();
const axios = require('axios');

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

// LISTEN
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

