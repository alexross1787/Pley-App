import React, { useState } from 'react';

const ReservationForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  // Handler function to update form data as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 // Handler function to submit the reservation form
const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form data to the backend API
    console.log('Form submitted:', formData);
    // You can make a fetch request to your backend endpoint here
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default ReservationForm;
