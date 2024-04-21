// reservation-api.js

const express = require('express');
const router = express.Router();

// Mock reservation data
let reservations = [
  { id: 1, name: 'John Doe', date: '2024-04-15', time: '18:00', partySize: 4 },
  { id: 2, name: 'Jane Smith', date: '2024-04-16', time: '19:00', partySize: 2 },
  // Add more mock reservations as needed
];

// GET all reservations
router.get('/', (req, res) => {
  res.json(reservations);
});

// GET a single reservation by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const reservation = reservations.find(r => r.id === id);
  if (!reservation) {
    res.status(404).json({ message: 'Reservation not found' });
  } else {
    res.json(reservation);
  }
});

// POST a new reservation
router.post('/', (req, res) => {
  const newReservation = req.body;
  // Generate a unique ID for the new reservation
  newReservation.id = reservations.length + 1;
  reservations.push(newReservation);
  res.status(201).json(newReservation);
});

// PUT (update) an existing reservation
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedReservation = req.body;
  const index = reservations.findIndex(r => r.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Reservation not found' });
  } else {
    reservations[index] = { ...reservations[index], ...updatedReservation };
    res.json(reservations[index]);
  }
});

// DELETE a reservation
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = reservations.findIndex(r => r.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Reservation not found' });
  } else {
    reservations.splice(index, 1);
    res.json({ message: 'Reservation deleted successfully' });
  }
});

module.exports = router;
