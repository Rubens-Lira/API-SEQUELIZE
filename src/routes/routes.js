import express from "express"
import Task from "../models/Task.js"

const router = express.Router()

router.post("/tasks", async (req, res, next) => {
  try {
    const { name, status, priority, description } = req.body
    const task = await Task.create({ name, status, priority, description })
    return res.status(201).json(task)  // Retorna a tarefa criada
  } catch (error) {
    next(error)
  }
})

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Task.findAll()
    res.json(tasks) // Retorna a lista de tarefas
  } catch (error) {
    next(error) // Passa o erro para o middleware de erro
  }
})

router.get("/tasks/:id", async (req, res, next) => {
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
})

router.put("/tasks/:id", async (req, res, next) => {
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
})

router.delete("/tasks/:id", async (req, res, next) => {
    try {
        const task = await Task.findByPk(req.params.id)
        if (!task) {
          const error = new Error("Task não encontrada")
          error.status = 404
          return next(error)
        }
        
        await task.destroy()
        res.json(task)
    } catch (error) {
        next(error)
    }
})



export default router
