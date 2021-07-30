const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const noteHandler = require("./routes/note_handler");
const welcomeInfo = require("./welcome_information");



//express app initialization
const app = express();
app.use(express.json());

dotenv.config();


//port initialization
const port = process.env.PORT || 3000;

//database connection with mongoose
mongoose
    .connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));



//routes
app.get("/", (req, res) => { res.json(welcomeInfo); });
app.use("/notes", noteHandler);


app.use(error404Handler);
app.use(errorHandler);

//404 error handler
function error404Handler(req, res, next) {
    next("no route was found!");
}
//default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        next('There was a problem in streaming!!');
    } else {
        if (err.message) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: err });
        }
    }
}



app.listen(port, () => {
    console.log(`Notes Api listening to port ${port}`);
});