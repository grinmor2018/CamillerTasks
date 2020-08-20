import React, { Component } from "react";

export default class EstatPill extends Component {
  render() {
    const estado = this.props.estado;

    if (estado === "Portat") {
      return (
        <span className="badge badge-pill badge-primary ml-2">Portat</span>
      );
    }
    if (estado === "Tornat") {
      return (
        <span className="badge badge-pill badge-success ml-2">Tornat</span>
      );
    }
    if (estado === "Demanat") {
      return (
        <span className="badge badge-pill badge-danger ml-2">Demanat</span>
      );
    }
  }
}
