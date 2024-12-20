import { useState, useEffect } from "react";

import customFetch from "./customFetch";

type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const title = formData.get("title") as string;
  try {
    await customFetch.post("/tasks", { title });
  } catch (error) {
    console.log(error);
  }
};

export const useFetchTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await customFetch("/tasks", {
        method: "GET",
      });
      setLoading(false);
      if (!response) {
        setError("No data found");
        return;
      }
      setTasks(response.data);
    } catch (error) {
      setLoading(false);
      setError("An error occurred while fetching tasks");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, loading, error, refetch: fetchTasks };
};

export const deleteAction = async ({ id }: { id: string }) => {
  try {
    await customFetch(`/tasks/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTaskAction = async ({
  id,
  isCompleted,
}: {
  id: string;
  isCompleted: boolean;
}) => {
  console.log(isCompleted);
  try {
    await customFetch.patch(`/tasks/${id}`, {
      isCompleted: !isCompleted,
    });
  } catch (error) {
    console.log(error);
  }
};
