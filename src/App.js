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
    { titel: "reading", id: 31, editeStatus: false, doneStatus: true },

  ]);
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);
  console.log(done)


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
      editeState: false,
      doneStatus: false,
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
////// change task
  const handelChangeTask = (id, event) => {
    const dupTodo = [...todo];/// duplicate todo state
    const todoIndex = dupTodo.findIndex(item => item.id === id);
    dupTodo[todoIndex].titel = event.target.value

    setTodo(dupTodo)
    console.log(todo)
  }
////done
const handelDoneTask = (id) =>{
  const dupTodo = [...todo];/// duplicate todo state
  const todoIndex = dupTodo.findIndex(item => item.id === id);
  dupTodo[todoIndex].doneStatus = true
  setTodo(dupTodo)

}
/////

  return (

    <SimpleContext.Provider
      value={{
        todo,
        deleted: handelDeleteTask,
        added: handelAddTask,
        addTask,
        task,
        edited: handelEditeStatus,
        changed:handelChangeTask,
        done,setDone,
        Done:handelDoneTask

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
