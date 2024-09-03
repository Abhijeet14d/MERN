const express = require('express');
const { 
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
 } = require('../controllers/taskController');


const router = express.Router();

// Get all Tasks
router.get('/', getTasks);

// Get a Task
router.get('/:id', getTask);

// Post a Task
router.post('/', createTask);

// Delete a Task
router.delete('/:id', deleteTask);

// Update a Task
router.patch('/:id', updateTask);



module.exports = router;