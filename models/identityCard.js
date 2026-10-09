const {Sequelize ,DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const IdentityCard = sequelize.define('identityCard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cardNo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentId : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = IdentityCard;
