import React from 'react';

const Todo = ({ titel, deleted,handelEditeStatus,editeStatus}) => {
     let input = null
     //  input = {editeStatus ? <input placeholder={titel}/> : null}
     if(editeStatus){
          input = <input placeholder={titel} />
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
                         <button type="button" className="btn btn-info btn-sm" onClick={handelEditeStatus}>edit</button>
                         <button type="button" className="btn btn-success btn-sm ml-1">done</button>
                         <button type="button" className="btn btn-danger btn-sm ml-1" onClick={deleted}>delete</button>

                    </div>
               </div>
          </div>
     );
}

export default Todo;