import React, { Component } from "react";
import logo from "./logo.png";

import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//dades
import { tasks } from "./Tasks.json";
//subcomponents
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import ShowTask from "./Components/ShowTask";
import TasksForm from "./Components/TasksForm";
import ViewTasks from "./Components/ViewTasks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks,
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  removeTask(index) {
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index;
      }),
    });
  }

  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  addTask() {
    return (
      
        <TasksForm onAddTask={this.handleAddTask}></TasksForm>
      
    );
  }

  render() {
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="LogoTransport" alt="logo" />
          <h3 className="display-5">Tasques</h3>
        </header>
        <div className="App-body">
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              Tasks
              <span className="badge badge-pill badge-light ml-2">
                {this.state.tasks.length}
              </span>
            </a>
          </nav>

          <div className="container">

              {/*Router
              Configuracion Navegacion*/}
              <BrowserRouter>
                <React.Fragment>
                  <Switch>
                    <Route
                      path="/AddTask"
                      render={() => (
                        <AddTask
                          filterText={this.state.filterText}
                          filterUpdate={this.filterUpdate.bind(this)}
                        />
                      )}
                    />
                    <Route
                      path="/EditTask"
                      render={() => (
                        <EditTask onAddDato={this.handleAddDatos} />
                      )}
                    />
                    <Route
                      path="/ShowTask"
                      render={() => (
                        <ShowTask
                          data={this.state.data}
                          onEditarDato={this.handleEditarDatos}
                        />
                      )}
                    />
                    <Route path="/ViewTasks" render={() => <ViewTasks />} />
                    <Redirect from="/" to="/ViewTasks" />
                  </Switch>
                </React.Fragment>
              </BrowserRouter> 

          </div>
        </div>
      </div>
    );
  }
}

export default App;
