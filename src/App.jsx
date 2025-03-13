import "./App.css";
import ListTask from "./components/ListTask";
import Header from "./components/Header";
import Day from "./components/Day";
import Form from "./components/Form";
import Month from "./components/Month";
import Week from "./components/Week";
import Year from "./components/Year";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("day");

  return (
    <main>
      <h1 className="text-2xl">Todo List</h1>
      <div className="bg-gray-950 text-white rounded max-w-[650px] m-auto">
        <Header tab={tab} setTab={setTab} />
        {tab === "day" && (
          <>
            <Day />
            <Form />
            <ListTask />
          </>
        )}
        {tab === "week" && <Week />}
        {tab === "month" && <Month />}
        {tab === "year" && <Year />}
      </div>
    </main>
  );
}

export default App;
