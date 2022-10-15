/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import cors from 'cors';

// Importing user route
import router from './routes/users.js';
// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = 3001


app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.use(bodyParser.json())
// Adding a Router
app.use('/users', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})