import { handleSubmit } from "../utils/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Form = () => {
  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <Input
        type="text"
        name="title"
        placeholder="e.g. wash dishes"
        className="flex-grow p-2 border rounded focus:outline-none"
      />
      <Button type="submit" className="">
        Submit
      </Button>
    </form>
  );
};
export default Form;
