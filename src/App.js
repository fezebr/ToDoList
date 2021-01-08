import React, { useState } from 'react';
import Header from './components/common/Header';
import AddTodo from './components/AddTodo';
import ManageTodos from './components/Todo/ManageTodos';
import SimpleContext from './context/SimpleContext';

function App() {
  const [todo, SetTodo] = useState([
    { titel: "programming", id: 21, EditeState: false, status: false },
    { titel: "walking", id: 61, EditeState: false, status: false },
    { titel: "reading", id: 31, EditeState: false, status: false },

  ])
  return (
    <SimpleContext.Provider
    value = {{
      todo,
    }}
    >
      <Header />
      <main>
        <AddTodo />
        <ManageTodos />
      </main>
    </SimpleContext.Provider>



  );
}

export default App;
