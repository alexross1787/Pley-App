//DEPENDENCIES
const express = require('express');
const router = express.Router();
const sequelize = require('../database')
const User = require('../models/user')(sequelize);

// GET ALL USERS
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json('Failed to fetch users');
    }
});

// FETCH USER BY ID
router.get('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ where: { id: userId } });

        if (!user) return res.status(404).json('User not found');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json('An error occurred while fetching user details');
    }
});

// CREATE USER
router.post('/', async (req, res) => {
    const { username, email, password, profileInfo } = req.body;
    try {
        const newUser = await User.create({ username, email, password, profileInfo });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json('Failed to create user');
    }
});

// UPDATE USER
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        await user.update(req.body)
        res.json(user)
    } catch (error) {
        console.error('Error adding user', error);
        res.status(500).json('Failed to add user')
    }
})

// DELETE USER
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ where: { id: userId } });

        if (!user) return res.status(404).json('User not found');
        
        await user.destroy();
        res.status(200).json('User deleted successfully');
    } catch (error) {
        res.status(500).json('Failed to delete user' );
    }
});

module.exports = router;