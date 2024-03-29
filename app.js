const express = require('express');
const logger = require('morgan'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const helmet = require('helmet');

//Mongo DB connection setup
//mongoose.connect('mongodb://localhost/<name of your database>');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/api_app');


const app =express();
app.use(helmet());
//Routers
const users = require('./routes/users');
const cars = require('./routes/cars');



//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
//Routes
app.use('/users', users);
app.use('/cars', cars);

//Catch 404 errors and forward them to the error handeler
app.use((req, res, next) => {
 const err = new Error("Not Found");
 err.status = 404;
 next(err);
});
//Error Handeler function
app.use((err, req, res, next) => {
    const error = app.get('env')==='development' ? err : {};
    const status = err.status || 500;
    //Respond to client
    res.status(status).json({
        error:{
            message:error.message
        }
    });
    //Respond to ourselves
    console.error(err);
});
//start the server
const port =app.get('port') || 3000;
app.listen(port, () => console.log(`Server is listening on ${port}`));