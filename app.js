const express = require('express');
const app = express();
const Productrouter = require('./api/v1/routes/product');

// הוספת שכבה של ניתוב עבור מוצרים
app.use("/product", Productrouter);













module.exports = app;