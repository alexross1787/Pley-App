//DEPENDENCIES
const express = require('express');
const router = express.Router();
const { Reservation } = require('../models/reservation');

//FIND ALL
router.get('/', async (req, res) => {
    try {
        // Fetch all reservations from the database
        const foundReservations = await Reservation.findAll();
        res.status(200).json(foundReservations);
    } catch (error) {
        res.status(500).json(error);
    }
});

// FIND SPECIFIC ITEM
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // Find reservation by ID in the database
        const reservation = await Reservation.findOne({ where: { id } });
        if (!reservation) {
            return res.status(404).json('Reservation not found');
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json(error);
    }
});

//CREATE
router.post('/', async (req, res) => {
    const { name, numberOfGuests, dateTime, specialRequests } = req.body;
    try {
        const newReservation = await Reservation.create({
            name,
            numberOfGuests,
            dateTime,
            specialRequests
        });
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(500).json(error);
    }
});

//UPDATE
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, numberOfGuests, dateTime, specialRequests } = req.body;
    try {
        const reservation = await Reservation.findOne({ where: { id } });
        if (!reservation) {
            return res.status(404).json('Reservation not found');
        }
        await reservation.update({
            name,
            numberOfGuests,
            dateTime,
            specialRequests
        });
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findOne({ where: { id: req.params.id } });

        if (!reservation) {
            return res.status(404).json('Reservation not found');
        }
        await reservation.destroy();
        res.status(200).json(`Successfully deleted reservation with ID ${req.params.id}`);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router; // Export the router instance




