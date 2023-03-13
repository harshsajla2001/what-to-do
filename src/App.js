import { createContext, useEffect, useState } from "react";
import Form from "./component/Form";
import axios from "axios";
import { Typography } from "@mui/material";

export const GlobalInfo = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [val, setVal] = useState()
  // Function to get values from child componets
  const getValues = (data) => {
    setVal(data);
  };
  // Function to edit data base
  const editTodo = (id, todo) => {
    axios
      .put(`http://localhost:3004/todoList/${id}`, {
        todo: todo,
      })
      .then(() => {
        getTodo();
      })
      .catch((err) => console.log(err));
  };
  // Function to get data from data base
  const getTodo = () => {
    axios
      .get("http://localhost:3004/todoList")
      .then((data) => {
        setTodos(data.data);
      })
      .catch((err) => console.log(err));
  };
  // Function to add data into data base
  const postTodo = (todo = "empty input") => {
    axios
      .post("http://localhost:3004/todoList", {
        todo: todo,
      })
      .then(() => {
        getTodo()
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Function to delete data from data base
  const deletTodo = (id) => {
    axios
      .delete(`http://localhost:3004/todoList/${id}`)
      .then(() => getTodo())
      .catch((error) => {
        console.log(error);
      });
  };
  // Function to get data when page load
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <GlobalInfo.Provider
        value={{
          getValues: getValues,
          postTodo: postTodo,
          getTodo: getTodo,
          deletTodo: deletTodo,
          setVal: setVal,
          editTodo: editTodo,
          todos: todos,
          val: val,
        }}
      >
        <Typography variant='h1' align="center" sx={{color:'light blue'}} > what to do!</Typography>
        <Form />
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
