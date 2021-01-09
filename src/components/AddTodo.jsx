import React, { useContext } from 'react'
import SimpleContext from './../context/SimpleContext';
const AddTodo = () => {
     const context = useContext(SimpleContext);

     return (
          <section className="jumbotron">
               <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                    <div className="form-inline">
                         <form className="form-group "
                              onSubmit={event => event.preventDefault()}
                         >
                              <input
                                   type="text"
                                   className="form-control 
                               mx-sm-3"
                                   placeholder="i want to do ..."
                                   onChange={context.addTask}
                                   value={context.task}

                              />
                              <button className="btn btn-primary" onClick={() => context.added()} type="submit">add</button>
                         </form>
                    </div>
               </div>
          </section>
     );
}

export default AddTodo;