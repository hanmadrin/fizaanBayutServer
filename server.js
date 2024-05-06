const express = require('express');
const app = express();
app.listen(3131);
const cors = require('cors');
const cookieParser = require("cookie-parser");
const formidable = require('express-formidable');
const Bayut = require('./models/Bayut.js');
const Dubbizle = require('./models/Dubbizle.js');


app.use(cors());
app.use(cookieParser());
app.use(formidable());

// upload items to db
app.use('/addBayut', async (req, res) => {
    const listings = req.fields.listings;
    // bulk create and ignore duplicates
    await Bayut.bulkCreate(listings, { ignoreDuplicates: true });
    res.json({ status: 'success' });
});
app.use('/addDubizzle', async (req, res) => {
    const listings = req.fields.listings;
    // bulk create and ignore duplicates
    await Dubbizle.bulkCreate(listings, { ignoreDuplicates: true });
    res.json({ status: 'success' });
});
