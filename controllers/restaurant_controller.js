//DEPENDENCIES
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Restaurant } = require('../models');

// FETCH LIST BASED ON LOCATION
router.get('/', async (req, res) => {
    try {
        const restaurants = await axios.get('https://api.yelp.com/v3');
        res.status(200).json(restaurants.data);
    } catch (error) {
        res.status(500).json('Failed to fetch restaurants');
    }
});

// FETCH DETAILS BY ID
router.get('/:id', async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const apiKey = process.env.YELP_API_KEY;

        if (!apiKey) {
            return res.status(500).json('API key missing');
        }

        const response = await axios.get(`https://api.yelp.com/v3/businesses/${restaurantId}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const restaurantDetails = response.data;
        res.status(200).json(restaurantDetails);
        
    } catch (error) {
        console.error('Error fetching restaurant details:', error);
        res.status(500).json('An error occurred while fetching restaurant details');
    }
});

// ADD RESTAURANT
router.post('/', async (req, res) => {
    const newRestaurant = await Restaurant.create(req.body)
    res.status(201).json(newRestaurant)
})

// GET ALL RESTAURANTS
router.get('/getall', async (req, res) => {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
})

module.exports = Restaurant;