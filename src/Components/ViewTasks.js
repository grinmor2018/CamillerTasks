import React, { Component } from 'react'

//dades
import { tasks } from ".././Tasks.json";

import Targeta from "./Targeta";

export default class ViewTasks extends Component {
    constructor() {
        super();
        this.state = {
          tasks,
        };
        //this.handleAddTask = this.handleAddTask.bind(this);
      }
    
    
    render() {
        const tasques = this.state.tasks.map((task, i) => {
            if (task.estat === "Portat") {
              return (
                <div className="col-4">
                  <div className="card border-primary m-1">
                    <Targeta tasca={task} />
                  </div>
                </div>
              );
            }
      
            if (task.estat === "Tornat") {
              return (
                <div className="col-4">
                  <div className="card border-success m-1">
                    <Targeta tasca={task} />
                  </div>
                </div>
              );
            }
      
            if (task.estat === "Demanat") {
              return (
                <div className="col-4">
                  <div className="card border-danger m-1">
                    <Targeta tasca={task} />
                  </div>
                </div>
              );
            }
          });
        return (
            
            <div className="row">
            <div className="col-sm-8 text-center">
              <div className="row">{tasques}</div>
            </div>
            <div className="col-sm-4 text-left">
              <button className="btn btn-primary">
                +
              </button>
            </div>
          </div>
        )
    }
}
