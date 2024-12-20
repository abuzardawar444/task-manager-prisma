import { Request, Response } from "express";
import db from "../utils/db";
import { Task } from "../utils/types";
import { validateTask } from "../utils/validation";
import { createCustomError } from "../errors/custom-errors";
import { asyncWrapper } from "../errors/async-wrapper";

export const createTask = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const { error } = validateTask(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }
    const { title, isCompleted } = req.body as Task;
    const newTask = await db.tasks.create({
      data: {
        title,
        isCompleted,
      },
    });
    res.status(201).json(newTask);
  }
);

export const getAllTasks = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const tasks: Task[] = await db.tasks.findMany();
    if (tasks.length === 0) {
      res.status(404).json({ message: "No tasks found" });
      return;
    }
    console.log(tasks);
    res.status(200).json(tasks);
  }
);

export const getTask = asyncWrapper(
  async (req: Request, res: Response, next): Promise<void> => {
    const { id } = req.params;
    const task = await db.tasks.findUnique({
      where: {
        id: id as string,
      },
    });
    if (!task) {
      next(createCustomError("Not task found", 404));
      return;
    }
    res.status(200).json(task);
  }
);

export const deleteTask = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await db.tasks.delete({
      where: {
        id: id as string,
      },
    });
    res.status(200).json({ message: "task deleted successfully" });
  }
);

export const updateTask = asyncWrapper(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { isCompleted } = req.body as Task;
    if (isCompleted === undefined) {
      res.status(400).json({ message: "isCompleted is required" });
      return;
    }
    await db.tasks.update({
      where: {
        id: id as string,
      },
      data: {
        isCompleted,
      },
    });
    res.status(200).json({ message: "task updated successfully" });
  }
);
