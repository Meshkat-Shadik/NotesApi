const express = require('express');
const mongoose = require('mongoose');



//express app initialization
const app = express();

//port initialization
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.json({ message: "Welcome to notes api" });
});


app.listen(port, () => {
    console.log(`Notes Api listening to port ${port}`);
});