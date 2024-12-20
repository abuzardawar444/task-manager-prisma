import { updateTaskAction } from "../utils/actions";
import { Input } from "./ui/input";

const UpdateTasks = ({
  id,
  isCompleted,
  refetchTasks,
}: {
  id: string;
  isCompleted: boolean;
  refetchTasks: () => void;
}) => {
  const handleChange = () => {
    updateTaskAction({ id, isCompleted });
    refetchTasks();
  };
  return (
    <>
      <Input
        className="text-green-500 hover:text-green-600"
        onChange={handleChange}
        type="checkbox"
        checked={isCompleted}
      />
    </>
  );
};
export default UpdateTasks;
