// DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT

// Database Connection
mongoose.connect(process.env.DATABASE_URL)

// Database Connection Logs Error/Success
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// I N D U C E S

// INDEX 

// NEW
app.get('/logs', (req, res) => {
    res.render('new.ejs')
})

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW

//LISTENER
app.listen(PORT, () =>
console.log("Stardate 47856.2: Still Alive"))