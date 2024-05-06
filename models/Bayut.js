const sequelize = require('sequelize');
const db = require('../database.js');

const Bayut = db.define('bayut',{
    // [
    //     "url",
    //     "state",
    //     "title",
    //     "purpose",
    //     "price",
    //     "rentFrequency",
    //     "referenceNumber",
    //     "phoneNumber",
    //     "agency",
    //     "area",
    //     "baths",
    //     "rooms",
    //     "location",
    //     "permitNumber",
    //     "completionStatus",
    //     "furnishingStatus",
    //     "verification",
    //     "createdAt",
    //     "externalID",
    //     "category"
    // ]
    externalID: {
        primaryKey: true,
        type: sequelize.INTEGER(15),
        autoIncrement: false,
    },
    url: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    state: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    title: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    purpose: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    price: {
        type: sequelize.INTEGER(15),
        allowNull: false,
    },
    rentFrequency: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    referenceNumber: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    phoneNumber: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    agency: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    area: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    baths: {
        type: sequelize.INTEGER(15),
        allowNull: false,
    },
    rooms: {
        type: sequelize.INTEGER(15),
        allowNull: false,
    },
    location: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    permitNumber: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    completionStatus: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    furnishingStatus: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    verification: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    postCreatedAt: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    category: {
        type: sequelize.STRING(255),
        allowNull: false,
    }
},{
    timestamps: true,
    // freezeTableName: true,
    // tableName: 'Bayuts'
});
// Bayut.sync({force: true});
module.exports = Bayut;