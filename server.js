const express  = require("express");
const cors     = require("cors");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');

require('dotenv').config();

const app      = express();
const port     = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true,useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log("SD MONGODB connection establish Successfully");
})

const exercisesRouter = require('./routes/exercise');
const usersRouter     = require('./routes/users');
const uploadRouter     = require('./routes/upload');


app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);
app.use('/upload',uploadRouter);


app.listen(port, function() {
	console.log("SD Server listening on port: " + port);
});
