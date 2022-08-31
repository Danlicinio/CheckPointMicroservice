const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://licinio:licinio2022@cluster0.mvnhqhz.mongodb.net/sample_mflix");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Habilitar o Cors
app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token' )
    next();
});

//Registrar a model

require('./models/product');

//Registrar a rota
const productRouter = require('./routes/product-route');
const index = require('./routes/index')
app.use('/', index);
app.use('/products', productRouter);
module.exports = app

