const mongoose = require('mongoose')

const TaskModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [3, 'Title length must be 3 character'],
    maxLength: 50
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

const Task = mongoose.model('Task', TaskModel)

module.exports = Task
