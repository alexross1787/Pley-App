// DEPENDENCIES
const express = require('express');
const router = express.Router();
const { Review } = require('../models/review');

// FETCH ALL REVIEWS
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json('Failed to fetch reviews');
    }
});

// FETCH REVIEW BY ID
router.get('/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;
        const review = await Review.findOne({ where: { id: reviewId } });

        if (!review) return res.status(404).json('Review not found');
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json('An error occurred while fetching review details');
    }
});

// CREATE REVIEW
router.post('/', async (req, res) => {
    const { title, content, rating, restaurantId, userId } = req.body;
    try {
        const newReview = await Review.create({ title, content, rating, restaurantId, userId });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json('Failed to create review');
    }
});

// UPDATE REVIEW
router.put('/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;
        const review = await Review.findOne({ where: { id: reviewId } });

        if (!review) return res.status(404).json('Review not found');
        
        await review.update(req.body);
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json('Failed to update review');
    }
});

// DELETE REVIEW
router.delete('/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;
        const review = await Review.findOne({ where: { id: reviewId } });

        if (!review) return res.status(404).json('Review not found');
        
        await review.destroy();
        res.status(200).json('Review deleted successfully');
    } catch (error) {
        res.status(500).json('Failed to delete review' );
    }
});

module.exports = router;