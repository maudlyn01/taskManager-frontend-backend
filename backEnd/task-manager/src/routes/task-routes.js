import express from "express";
import {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task-controller.js";

export const router = express.Router();

router.get("/",getAllTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);