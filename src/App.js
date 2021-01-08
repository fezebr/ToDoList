import React, { useState } from 'react';
import Header from './components/common/Header';
import AddTodo from './components/AddTodo';
import ManageTodos from './components/Todo/ManageTodos';
import SimpleContext from './context/SimpleContext';

function App() {
  /////states
  const [todo, setTodo] = useState([
    { titel: "programming", id: 21, EditeState: false, status: false },
    { titel: "walking", id: 61, EditeState: false, status: false },
    { titel: "reading", id: 31, EditeState: false, status: false },

  ])
  ///// add delete edit done

  const handelDeleteTask = (id) => {
    const dupTodo = [...todo];/// duplicate todo state
    const filterTodo = dupTodo.filter(item => item.id !== id); 
    setTodo(filterTodo)

  }

  return (

    <SimpleContext.Provider
    value = {{
      todo,
      deleted:handelDeleteTask,
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
