
import Header from './components/common/Header';
import AddTodo from './components/AddTodo';

function App() {
  return (
        <div class="App">
         <Header />
            <main>
             <AddTodo/>
              <div class="todosList">
                    <div class="container">
                        <div class="d-flex flex-column align-items-center ">
                            <nav class="col-6 mb-3">
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span class="badge badge-secondary">9</span></a>
                                    <a class="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span class="badge badge-success">9</span></a>
                                </div>
                            </nav>
                            <div class="col-6 mb-2">
                                <div class="d-flex justify-content-between align-items-center border rounded p-3">
                                    <div>
                                        hello roocket
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-info btn-sm">edit</button>
                                        <button type="button" class="btn btn-danger btn-sm ml-1">delete</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-2">
                                <div class="d-flex justify-content-between align-items-center border rounded p-3">
                                    <div>
                                        hello roocket
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-info btn-sm">edit</button>
                                        <button type="button" class="btn btn-danger btn-sm ml-1">delete</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-2">
                                <div class="d-flex justify-content-between align-items-center border rounded p-3">
                                    <div>
                                        hello roocket
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-info btn-sm">edit</button>
                                        <button type="button" class="btn btn-danger btn-sm ml-1">delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                    </div>
              </div>
            </main>
        </div>
  

  );
}

export default App;
