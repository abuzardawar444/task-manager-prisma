import { deleteAction } from "../utils/actions";
import { Button } from "./ui/button";

const DeleteButton = ({
  id,
  refetchTasks,
}: {
  id: string;
  refetchTasks: () => void;
}) => {
  const handleDelete = () => {
    deleteAction({ id });
    refetchTasks();
  };
  return (
    <div>
      <Button
        className="text-red-500 hover:text-red-600"
        onClick={handleDelete}
      >
        🗑️
      </Button>
    </div>
  );
};
export default DeleteButton;
