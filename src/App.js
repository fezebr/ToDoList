import React, { useState } from 'react';
import Header from './components/common/Header';
import AddTodo from './components/AddTodo';
import ManageTodos from './components/Todo/ManageTodos';
import SimpleContext from './context/SimpleContext';

function App() {
  /////states
  const [todo, setTodo] = useState([
    { titel: "programming", id: 21, editeStatus: false, doneStatus: false },
    { titel: "walking", id: 61, editeStatus: false, doneStatus: false },
    { titel: "reading", id: 31, editeStatus: false, doneStatus: false },

  ]);
  const [task, setTask] = useState("");

  ///// add delete edit done
  /////delete
  const handelDeleteTask = (id) => {
    const dupTodo = [...todo];/// duplicate todo state
    const filterTodo = dupTodo.filter(item => item.id !== id);
    setTodo(filterTodo)

  }
  ///// add
  const handelAddTask = () => {
    const dupTodo = [...todo];/// duplicate todo state
    const newtodo = {
      titel: task,
      id: Math.floor(Math.random() * 1000),
      EditeState: false,
      DoneStatus: false,
    }
    dupTodo.push(newtodo);
    setTodo(dupTodo);
    setTask(" ")
    // setTask(" ")
    console.log(task)
    console.log(todo)
  }
  const addTask = (event) => {
    setTask(event.target.value);
    // console.log(task)
  }
  //////edited
  const handelEditeStatus = (id) => {
    const dupTodo = [...todo];/// duplicate todo state
    const todoIndex = dupTodo.findIndex(item => item.id === id);
    dupTodo[todoIndex].editeStatus = !dupTodo[todoIndex].editeStatus

    setTodo(dupTodo)
    console.log(todo)
  }
  return (

    <SimpleContext.Provider
      value={{
        todo,
        deleted: handelDeleteTask,
        added: handelAddTask,
        addTask,
        task,
        handelEditeStatus,
      }}
    >
      <Header />
      <main>
        <AddTodo />
        <ManageTodos />
      </main>
    </SimpleContext.Provider >



  );
}

export default App;
