import express, { Request, Response } from "express";
import taskRoutes from "./routes/taskRoutes";
import notFound from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
const app = express();
app.use(express.json());

// tasks routes
app.use("/api/v1/tasks", taskRoutes);

// not found middleware
app.use(notFound);
app.use(errorHandlerMiddleware);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`App is listening on port 3000`);
});
