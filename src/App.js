import Form from "./component/Form";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalInfo = createContext();

function App() {
  const [todos, setTodos] = useState([]);
// console.log("test1",todos)
  const getValues = (data) => {
    return data;
  };

  // console.log(yoo, "bhar wala");
  const getTodo = () => {
     axios
      .get("http://localhost:3004/todoList")
      .then((data) => {
        setTodos(data.data);
        // console.log(data.data[1].id, "under wala");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTodo();
  }, []);

  // console.log(uniId)
  const postTodo = (todo = "empty input") => {
     axios
      .post("http://localhost:3004/todoList", {
        todo: todo,
      })
      .then(() => getTodo())
      .catch((error) => {
        console.log(error);
      });
  };
  const deletTodo = (id) => {
    axios
      .delete(`http://localhost:3004/todoList/${id}`)
      .then(() => getTodo())
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <GlobalInfo.Provider
        value={{
          todos: todos,
          getValues: getValues,
          postTodo: postTodo,
          getTodo: getTodo,
          deletTodo: deletTodo,
        }}
      >
        <Form />
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
