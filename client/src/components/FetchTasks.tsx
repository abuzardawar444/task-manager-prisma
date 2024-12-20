import DeleteButton from "./DeleteButton";
import { useFetchTasks } from "../utils/actions";
import UpdateTasks from "./UpdateTasks";

const FetchTasks = () => {
  const { tasks, loading, error, refetch } = useFetchTasks();
  const refetchTasks = () => {
    refetch();
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  if (tasks?.length === 0) {
    return (
      <div className="mt-8 w-full max-w-md text-center">
        <h2 className="text-gray-500">No tasks found!</h2>
      </div>
    );
  }

  return (
    <div className="mt-8 w-full max-w-md">
      {tasks?.map((task) => {
        return (
          <div
            key={task.id}
            className="flex items-center justify-between bg-white p-4 rounded shadow mb-2"
          >
            <div className="flex items-center space-x-2">
              <UpdateTasks
                id={task.id}
                isCompleted={task.isCompleted}
                refetchTasks={refetchTasks}
              />
              <span
                className={`${
                  task.isCompleted ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </span>
            </div>
            <div className="flex space-x-2">
              <DeleteButton id={task.id} refetchTasks={refetchTasks} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FetchTasks;
