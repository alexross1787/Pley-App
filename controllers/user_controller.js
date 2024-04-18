//DEPENDENCIES
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Review = require('../models/review');

// FETCH ALL REVIEWS BY USER
router.get('/:userId/reviews', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findOne({ where: { id: userId }, include: Review });

        if (!user) return res.status(404).json('User not found');
        res.status(200).json(user.Reviews);

    } catch (error) {
        res.status(500).json('Failed to fetch user reviews');
    }
});

// FETCH A SPECIFIC REVIEW BY USER
router.get('/:userId/reviews/:reviewId', async (req, res) => {
    try {
        const { userId, reviewId } = req.params;
        const review = await Review.findOne({ where: { id: reviewId, UserId: userId } });

        if (!review) return res.status(404).json('Review not found');
        res.status(200).json(review);

    } catch (error) {
        res.status(500).json('Failed to fetch user review');
    }
});

// CREATE A NEW REVIEW FOR USER
router.post('/:userId/reviews', async (req, res) => {
    const { userId } = req.params;
    const { title, content, rating, restaurantId } = req.body;
    try {
        const user = await User.findOne({ where: { id: userId } });

        if (!user) return res.status(404).json('User not found');

        const newReview = await Review.create({ title, content, rating, restaurantId, UserId: userId });
        res.status(201).json(newReview);

    } catch (error) {
        res.status(500).json('Failed to create review');
    }
});

// UPDATE A REVIEW BY USER
router.put('/:userId/reviews/:reviewId', async (req, res) => {
    const { userId, reviewId } = req.params;
    const { title, content, rating } = req.body;
    try {
        const review = await Review.findOne({ where: { id: reviewId, UserId: userId } });

        if (!review) return res.status(404).json('Review not found');
        await review.update({ title, content, rating });
        res.status(200).json(review);

    } catch (error) {
        res.status(500).json('Failed to update review');
    }
});

// DELETE A REVIEW BY USER
router.delete('/:userId/reviews/:reviewId', async (req, res) => {
    const { userId, reviewId } = req.params;
    try {
        const review = await Review.findOne({ where: { id: reviewId, UserId: userId } });

        if (!review) return res.status(404).json('Review not found');
        await review.destroy();
        res.status(200).json('Review deleted successfully');
        
    } catch (error) {
        res.status(500).json('Failed to delete review');
    }
});

module.exports = router;