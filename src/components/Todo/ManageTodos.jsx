import React, { useContext } from 'react'
import Todo from './Todo';
import SimpleContext from './../../context/SimpleContext';
const ManageTodos = () => {
     const context = useContext(SimpleContext);
     const { todo } = context
     return (
          <div className="todosList">
               <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                         <nav className="col-6 mb-3">
                              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                   <a className="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span className="badge badge-secondary">9</span></a>
                                   <a className="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span className="badge badge-success">9</span></a>
                              </div>
                         </nav>
                         {todo.map(item => (
                              <Todo
                                   key={item.id}
                                   titel={item.titel}
                                   editeStatus={item.editeStatus}
                                   deleted={() => context.deleted(item.id)}
                                   handelEditeStatus = {() =>context.handelEditeStatus(item.id)}

                              />
                         ))}

                    </div>
               </div>
          </div>
     );
}

export default ManageTodos;