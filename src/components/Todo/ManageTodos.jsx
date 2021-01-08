import React,{useContext} from 'react'
import Todo from './Todo';
import SimpleContext from './../../context/SimpleContext';
const ManageTodos = () => {
     const context = useContext(SimpleContext);
     const { todo } = context
     return (
          <div class="todosList">
               <div class="container">
                    <div class="d-flex flex-column align-items-center ">
                         <nav class="col-6 mb-3">
                              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                   <a class="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span class="badge badge-secondary">9</span></a>
                                   <a class="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span class="badge badge-success">9</span></a>
                              </div>
                         </nav>
                         {todo.map(item =>(
                               <Todo 
                               titel = {item.titel}
                               deleted = {() => context.deleted(item.id)}
                               />
                         ))}

                    </div>
               </div>
          </div>
     );
}

export default ManageTodos;