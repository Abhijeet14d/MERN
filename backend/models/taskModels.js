const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    customDate:{
        type: Date,
        default: Date.now
    }
},{timestamps: true});

module.exports = mongoose.model('Task', TaskSchema);

