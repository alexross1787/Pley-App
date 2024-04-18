// DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors')
const yelpController = require('./controllers/yelp_controller')

// CONFIGURATION AND MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());


// IMPORT CONTROLLERS
const reservationController = require('./controllers/reservation_controller');
const restaurantController = require('./controllers/restaurant_controller');
const reviewController = require('./controllers/review_controller');
const userController = require('./controllers/user_controller');

// CONTROLLERS
app.use("/api", yelpController)


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Pley'
    });
});


// Create a new Router instance
const router = express.Router();

// Add a middleware function that logs requests
router.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Add existing routes to the router
router.use('/reservations', reservationController);
router.use('/restaurants', restaurantController);
router.use('/reviews', reviewController);
router.use('/users', userController);

// Add the router to the main application
app.use('/', router);

// LISTEN
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
