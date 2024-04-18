//Represents user accounts in the system.
//Contains: username, email, password (hashed), profile information, and possibly roles or permissions.
//additional: user preferences, settings, or authentication tokens.

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate({ Review }) {
            // Define associations
            User.hasMany(Review, {
                foreignKey: 'userId',
                as: 'reviews'
            });
        }
    };

    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profileInfo: {
            type: DataTypes.TEXT
        },
        // Add more attributes as needed
    }, {
        sequelize,
        modelName: 'User'
    });

    return User;
};