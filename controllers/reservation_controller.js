//creating, updating, and canceling reservations.
//Validates*** reservation requests and checks availability based on restaurant capacity and existing reservations.
//Interacts with the reservation model to store and retrieve reservation data.

//DEPENDENCIES
const express = require('express');
const router = express.Router();
const { Reservation } = require('../models');

//FIND ALL
router.get('/', async (req, res) => {
    try {
        // Fetchs all reservations from the database
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
        const reservation = await Reservation.findByPk(id);
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
        const reservation = await Reservation.findByPk(id);
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
        const reservation = await Reservation.findByPk(req.params.id);

        if (!reservation) {
            return res.status(404).json('Reservation not found');
        }
        await reservation.destroy();
        res.status(200).json(`Successfully deleted reservation with ID ${req.params.id}`
        );
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = Reservation


