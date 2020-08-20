import React, { Component } from "react";

class TasksForm extends Component {
  constructor() {
    super();
    this.state = {
      habitacio: "",
      hora: "",
      nom: "",
      transport: "",
      oxigen: "",
      desti: "",
      estat:""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state);
    this.setState({
      habitacio: "",
      hora: "",
      nom: "",
      transport: "",
      oxigen: "",
      desti: "",
      estat:""
    });
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <select
              name="desti"
              value={this.state.desti}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Destí"
            >
              <option value="R1">R1</option>
              <option value="R2">R2</option>
              <option value="TAC UDIAT">TAC UDIAT</option>
              <option value="TAC TAULI">TAC TAULI</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="habitacio"
              value={this.state.habitacio}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Habitació"
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              name="hora"
              value={this.state.hora}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Hora"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="nom"
              value={this.state.nom}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Nom"
            />
          </div>
          <div className="form-group">
            <select
              name="transport"
              value={this.state.transport}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Transport"
            >
              <option value="Cadira">Cadira</option>
              <option value="Camilla">Camilla</option>
              <option value="Llit">Llit</option>
              <option value="A peu">A peu</option>
            </select>
          </div>
          <div className="form-group">
            <select
              name="oxigen"
              value={this.state.oxigen}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Oxigen"
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <select
              name="estat"
              value={this.state.estat}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Estat"
            >
              <option value="Demanat">Demanat</option>
              <option value="Portat">Portat</option>
              <option value="Tornat">Tornat</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default TasksForm;
