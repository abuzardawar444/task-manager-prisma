import Joi from "joi";
import { Task } from "./types";
const taskSchema = Joi.object({
  title: Joi.string().required(),
  isCompleted: Joi.boolean(),
});

export const validateTask = (tasks: Task) => {
  return taskSchema.validate(tasks);
};
