// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/logs.js');
const logData = require('./models/seed.js');

require('dotenv').config();

const PORT = process.env.PORT

// Database Connection
mongoose.connect(process.env.DATABASE_URL)

// Database Connection Logs Error/Success
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// MIDDLEWARE
// Body Parser
app.use(express.urlencoded({extended: true}))

// I N D U C E S

//Seed
app.get('/logs/seed', (req, res) => {
    Log.create(logData, (error, data) => {
        res.redirect("/logs")
    })
})

// INDEX


// NEW
app.get('/logs', (req, res) => {
    res.render('new.ejs')
})

// DELETE

// UPDATE

// CREATE
app.post('/logs', (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true 
    } else {
        req.body.shipIsBroken = false
    }

    Log.create(req.body, (error, createdLog) => {
        res.redirect('/logs/:id');
    })
})

// EDIT

// SHOW

app.get('/logs/:id', (req, res) => {

})

//Seed
app.get('/logs/seed', (req, res) => {
    Log.create(logData, (error, data) => {
        res.redirect("/logs")
    })
})

//LISTENER
app.listen(PORT, () => console.log("Stardate 47856.2: Still Alive"))