const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./routes/workout')

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
app.use(workoutRoutes);


// listen for requests
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});
