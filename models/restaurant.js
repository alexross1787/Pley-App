//Represents restaurant listings or establishments available for reservations.
//Contains fields such as name, address, contact information, opening hours, cuisine type, and seating capacity.
//additional: images, descriptions, reviews, and ratings

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    class Restaurant extends Model {
        static associate({ Reservation }) {
            // Define associations
            Restaurant.hasMany(Reservation, {
                foreignKey: 'restaurantId',
                as: 'reservations'
            });
        }
    }

    Restaurant.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cuisine: {
            type: DataTypes.STRING
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Restaurant'
    });

    return Restaurant;
};
