const Task = require('../models/taskModels');
const mongoose = require('mongoose');
// Get all Tasks
const getTasks = async (req,res)=>{
    const tasks = await Task.find({}).sort({createdAt: -1});

    res.status(200).json({tasks});
}


// Get a Task
const getTask = async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Task not found'});
    }

    const task = await Task.findById(id);

    if(!task){
        return res.status(404).json({error: 'Task not found'});
    }


    res.status(200).json({task});
}

// create a Task
const createTask = async (req,res)=>{
    const {title, description,customDate} = req.body;
    
    // add doc to db
    try{
        const task = await Task.create({title, description, customDate});
        res.status(201).json({task});
    }catch(error){
        res.status(400).json({error: 'Server error'});
    }
}

// Delete a Task
const deleteTask = async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Task not found'});
    }

    const Task = await Task.findByIdAndDelete({_id: id});

    if(!Task){
        return res.status(404).json({error: 'Task not found'});
    }

    res.status(200).json({message: `${Task} deleted successfully`});
}

// Update a Task    
const updateTask = async (req,res)=>{
    const {id} = req.params;
    const {title, description} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Task not found'});
    }

    const Task = await Task.findByIdAndUpdate({_id: id}, {
        ...req.body
    });

    if(!Task){
        return res.status(404).json({error: 'Task not found'});
    }

    res.status(200).json({Task});
}




module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
};