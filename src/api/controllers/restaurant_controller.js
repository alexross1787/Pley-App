//DEPENDENCIES
const express = require('express');
const router = express.Router();
const sequelize = require('../database')
const Restaurant = require('../models/restaurant')(sequelize);

// GET ALL RESTAURANTS
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json('Failed to fetch restaurants');
    }
});


// FETCH DETAILS BY ID
router.get('/:id', async (req, res) => {
    console.log('Hello World!')
    try {
        const restaurantId = req.params.id;
        const restaurant = await Restaurant.findByPk(restaurantId)
        res.status(200).json(restaurant);
    } catch (error) {
        console.error('Error fetching restaurant details:', error);
        res.status(500).json('An error occurred while fetching restaurant details');
    }
});

// ADD RESTAURANT 
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const { name, address, cuisine, capacity } = req.body;
        const restaurants = await Restaurant.create({
            name,
            address,
            cuisine,
            capacity
        })
        res.json(restaurants)
    } catch (error) {
        console.error('Error adding restaurant', error);
        res.status(500).json('Failed to add restaurant')
    }
})

// PUT ROUTE
router.put('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id)
        await restaurant.update(req.body)
        res.json(restaurant)
    } catch (error) {
        console.error('Error adding restaurant', error);
        res.status(500).json('Failed to add restaurant')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id)
        await restaurant.destroy()
        res.json({ message: 'Successfully deleted :P'})
    } catch (error) {
        console.error('Error deleting restaurant', error);
        res.status(500).json('Failed to delete restaurant')
    }
})

module.exports = router;