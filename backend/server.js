const express = require('express');
require('dotenv').config();
const TaskRoutes = require('./routes/Tasks')
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
});

// routes
app.use(TaskRoutes);


// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log(`Connected to db and listening on port ${process.env.PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })

