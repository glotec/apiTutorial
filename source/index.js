// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// import apiRouter from './routes/api/apiRouter';
var apiRouter = require('./routes/api/apiRouter').router;

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

//database config

//parse requests of content-type - application/json
app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api/', apiRouter);

//simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to tutorial application.' });
});

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));