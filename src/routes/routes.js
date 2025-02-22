import express from "express"
import TaskController from "../controller/TaskController.js";


const router = express.Router()

router.post("/task", TaskController.post)

router.get("/task", TaskController.getAll)

router.get("/task/:id", TaskController.get)

router.put("/task/:id", TaskController.put)

router.delete("/task/:id", TaskController.delete)

export default router
