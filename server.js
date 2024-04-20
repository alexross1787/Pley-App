// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const cors = require('cors');
const config = require('./config/config')
const yelpController = require('./src/api/controllers/yelp_controller');

// CONFIGURATION AND MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(config.development);

// Test database
sequelize.authenticate()
.then(() => {
    console.log('DB is working!!')
})
.catch(err => {
    console.error("error", error)
})

// IMPORT CONTROLLERS
const reservationController = require('./src/api/controllers/reservation_controller');
const restaurantController = require('./src/api/controllers/restaurant_controller');
const reviewController = require('./src/api/controllers/review_controller');
const userController = require('./src/api/controllers/user_controller');

// AWS SDK
const s3 = new AWS.S3();

// CONTROLLERS
app.use("/api", yelpController)

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Pley'
    });
});

// Import Sequelize models
const Restaurant = require('./src/api/models/restaurant')(sequelize);

// Create a new Router instance
const router = express.Router();

// Logs requests
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

// Sync Sequelize models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
        const PORT = 8080
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.error('Error syncing with database:', err);
    })

