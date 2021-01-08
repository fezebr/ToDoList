import React from 'react'
const AddTodo = () => {
     return (
          <section class="jumbotron">
               <div class="container d-flex flex-column align-items-center">
                    <h1 class="jumbotron-heading">Welcome!</h1>
                    <p class="lead text-muted">To get started, add some items to your list:</p>
                    <div class="form-inline">
                         <div class="form-group">
                              <input type="text" class="form-control mx-sm-3" placeholder="i want to do ..." />
                              <button class="btn btn-primary">add</button>
                         </div>
                    </div>
               </div>
          </section>
     );
}

export default AddTodo;