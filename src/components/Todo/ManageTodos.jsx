import React, { useContext } from 'react'
import Todo from './Todo';
import SimpleContext from './../../context/SimpleContext';
const ManageTodos = () => {
     const context = useContext(SimpleContext);
     const { todo, done, setDone } = context
     const filterTodo = todo.filter(item => item.doneStatus == done)
     return (
          <div className="todosList">
               <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                         <nav className="col-6 mb-3">
                              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                   <a className={`nav-item nav-link  font-weight-bold ${!done ? 'active' : null}`}
                                        id="nav-home-tab"
                                        onClick={() => setDone(false)}
                                   >
                                        undone
                                        <span className="badge badge-secondary ml-1">
                                             {todo.filter(item => item.doneStatus == false).length}
                                        </span>
                                   </a>
                                   <a className={`nav-item nav-link  font-weight-bold ${done ? 'active' : null}`}
                                        id="nav-profile-tab"
                                        onClick={() => setDone(true)}
                                   >
                                        done
                                        <span className="badge badge-success ml-1">
                                             {todo.filter(item => item.doneStatus == true).length}

                                        </span></a>
                              </div>
                         </nav>

                         {filterTodo.map(item => (
                              <Todo
                                   key={item.id}
                                   titel={item.titel}
                                   doneStatus={item.doneStatus}
                                   editeStatus={item.editeStatus}
                                   deleted={() => context.deleted(item.id)}
                                   edited={() => context.edited(item.id)}
                                   changed={(event) => context.changed(item.id, event)}
                                   Done={() => context.Done(item.id)}

                              />
                         ))}

                    </div>
               </div>
          </div>
     );
}

export default ManageTodos;