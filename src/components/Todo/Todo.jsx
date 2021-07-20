import React from 'react';

const Todo = ({ titel, deleted,edited,editeStatus,changed,Done,doneStatus}) => {
     let input = null
     if(editeStatus){
          input = <input 
          placeholder={titel}
          onChange={changed}
          />
     }

     return (
          <div className="col-6 mb-2">
               <div className=" d-flex justify-content-between align-items-center border rounded p-3">
                    <div className="flex-column d-flex">
                         {titel}
                         {/* <input placeholder={titel} /> */}
                         {input}
                         

                    </div>


                    <div>
                         <button type="button" className="btn btn-info btn-sm" onClick={edited}>edit</button>
                         <button type="button" className="btn btn-success btn-sm ml-1"onClick ={Done}>{doneStatus ? "undone": "done"}</button>
                         <button type="button" className="btn btn-danger btn-sm ml-1" onClick={deleted}>delete</button>

                    </div>
               </div>
          </div>
     );
}

export default Todo;