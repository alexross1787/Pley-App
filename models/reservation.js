//For individual reservations made by users for specific restaurants and timeslots.
//Contains: user ID (foreign key), restaurant ID (foreign key), reservation date and time, party size, and status (e.g., confirmed, canceled), and special request.

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Reservation extends Model {
        static associate({ User, Restaurant }) {
            // Define associations
        }
    };

    Reservation.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        partySize: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('confirmed', 'canceled'),
            defaultValue: 'confirmed'
        },
        specialRequest: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Reservation'
    });

    return Reservation;
};
