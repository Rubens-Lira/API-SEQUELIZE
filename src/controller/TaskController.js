import Task from "../models/Task.js"

const TaskController = {
  async post(req, res, next) {
    try {
      const { name, status, priority, description } = req.body
      const task = await Task.create({ name, status, priority, description })
      return res.status(201).json(task)  
    } catch (error) {
      next(error)
    }
  },

  async getAll(req, res, next) { 
    try {
      const tasks = await Task.findAll({ order: [["priority", "ASC"]] })
      res.json(tasks)
    } catch (error) {
      next(error)
    }
  },

  async get(req, res, next) {
    try {
      const task = await Task.findByPk(req.params.id)
      if (!task) {
        const error = new Error("Task não encontrada")
        error.status = 404
        return next(error)
      }
      res.json(task)
    } catch (error) {
      next(error)
    }
  },

  async put(req, res, next) {
    try {
      const task = await Task.findByPk(req.params.id)
      if (!task) {
        const error = new Error("Task não encontrada")
        error.status = 404
        return next(error)
      }
      await task.update(req.body)
      res.json(task)
    } catch (error) {
      next(error)
    }
  },

  async delete(req, res, next) {
    try {
      const task = await Task.findByPk(req.params.id)
      if (!task) {
        const error = new Error("Task não encontrada")
        error.status = 404
        return next(error)
      }
      await task.destroy()
      res.status(204).send() 
    } catch (error) {
      next(error)
    }
  }
}

export default TaskController
