const expressAsyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

const Task = require('../models/task')

const fetchTasks = expressAsyncHandler(async (req, res, next) => {
  Task.find().sort({ _id: -1 })
    .then((tasks) => {
      res.status(200).json(tasks)
    })
    .catch((error) => {
      res.status(400)
      next(error)
    })
})

const createTask = expressAsyncHandler(async (req, res, next) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).send({ message: 'Please fill all the feilds' })
  }

  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  })

  newTask.save()
    .then((task) => {
      res.status(200).json(task)
    })
    .catch((error) => {
      res.status(400)
      next(error)
    })
})

const updateTask = expressAsyncHandler(async (req, res, next) => {
  const taskId = req.body._id

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res.status(400).send({ message: 'Required valid task ID' })
  }
  const updateObject = req.body

  Task.findByIdAndUpdate(taskId, updateObject, { new: true })
    .then((updatedTask) => {
      res.json(updatedTask)
    })
    .catch((error) => {
      res.status(400)
      next(error)
    })
})

const deleteTask = expressAsyncHandler(async (req, res, next) => {
  const taskId = req.params.taskId

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res.status(400).send({ message: 'Required valid task ID' })
  }

  Task.findByIdAndDelete(taskId)
    .then((deletedTask) => {
      res.json(deletedTask)
    })
    .catch((error) => {
      res.status(400)
      next(error)
    })
})

module.exports = {
  createTask,
  fetchTasks,
  updateTask,
  deleteTask
}
