import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/taskController";
const router = express.Router();

router.route("/").post(createTask).get(getAllTasks);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

export default router;
