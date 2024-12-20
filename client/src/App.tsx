import FetchTasks from "./components/FetchTasks";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <h1 className="text-xl font-bold text-center mb-4">Task Manager</h1>
        <Form />
        <FetchTasks />
      </div>
    </div>
  );
};
export default App;
