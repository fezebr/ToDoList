import React from 'react';

const Todo = ({titel,deleted}) => {
     return (
          <div className="col-6 mb-2">
               <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                         {titel}
              </div>
                    <div>
                         <button type="button" className="btn btn-info btn-sm">edit</button>
                         <button type="button" className="btn btn-success btn-sm ml-1">done</button>
                         <button type="button" className="btn btn-danger btn-sm ml-1"onClick={deleted}>delete</button>

                    </div>
               </div>
          </div>
     );
}

export default Todo;