const express = require('express')

const { createTask, fetchTasks, updateTask, deleteTask } = require('../../../controllers/task')
const router = express.Router()

router.route('/task/:taskId?')
  .post(createTask)
  .get(fetchTasks)
  .put(updateTask)
  .delete(deleteTask)

module.exports = router
