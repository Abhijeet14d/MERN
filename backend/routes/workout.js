const express = require('express');
const router = express.Router();

// Get all Tasks
router.get('/',(req,res)=>{
    res.json({mssg: 'Get all Tasks'});
});

// Get a Task
router.get('/:id',(req,res)=>{
    res.json({mssg: 'get a Task'});
})

// Post a Task
router.post('/',(req,res)=>{
    res.json({mssg:'post new task'});
})

// Delete a Task
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'delete a task'});
})

// Update a Task
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'update a task'});
})



module.exports = router;