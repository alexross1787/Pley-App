//Represents user reviews and ratings for restaurants.
//Contains fields such as user ID (foreign key), restaurant ID (foreign key), review text, rating, and timestamp.
//May include additional fields for review titles, review scores, or review images.

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    class Review extends Model {
        static associate({ User, Restaurant }) {
            // Define associations
            Review.belongsTo(User, {
                foreignKey: 'userId',
                as: 'user'
            });

            Review.belongsTo(Restaurant, {
                foreignKey: 'restaurantId',
                as: 'restaurant'
            });
        }
    };

    Review.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Review'
    });

    return Review;
};
