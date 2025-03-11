import "./App.css";
import ListTask from "./components/ListTask";
import Header from "./components/Header";
import Day from "./components/Day";
import Form from "./components/Form";

function App() {
  return (
    <main>
      <h1 className="text-2xl">Todo List</h1>
      <div className="bg-gray-950 text-white rounded max-w-[650px] m-auto">
        <Header />
        <Day />
        <Form />
        <ListTask />
      </div>
    </main>
  );
}

export default App;
