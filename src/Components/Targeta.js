import React, { Component } from "react";

import EstatPill from "./EstatPill";
import ShowBottons from "./ShowBottons";

//imatges
import apeu from ".././apeu.png";
import cadira from ".././cadira.png";
import camilla from ".././camilla.png";
import llit from ".././llit.png";
import o2no from ".././o2no.png";
import o2si from ".././o2si.png";

export default class Targeta extends Component {
  constructor() {
    super();
    this.state = {
      estat: false,
    };
    this.changeEstat = this.changeEstat.bind(this);
  }

  imgTransport(image) {
    switch (image) {
      case "Camilla":
        return camilla;
      case "Cadira":
        return cadira;
      case "Llit":
        return llit;
      default:
        return apeu;
    }
  }

  imgO2(image) {
    switch (image) {
      case "Si":
        return o2si;
      default:
        return o2no;
    }
  }

  changeEstat() {
    this.setState((state) => ({
      estat: !state.estat,
    }));
  }

  render() {
    return (
      <div onClick={this.changeEstat}>
        <div className="card-header">
          <h3 className="h4">{this.props.tasca.habitacio}</h3>
          <h4 className="h5">{this.props.tasca.hora}</h4>
          <h3 className="h6">{this.props.tasca.desti}</h3>
          <EstatPill estado={this.props.tasca.estat} />
        </div>
        <div className="card-body">
          <p>{this.props.tasca.nom}</p>
          <img
            src={this.imgTransport(this.props.tasca.transport)}
            className="LogoTransport"
            alt="transport"
          />
          <img
            src={this.imgO2(this.props.tasca.oxigen)}
            className="LogoOxigen"
            alt="oxigen"
          />
        </div>
        <div className="card-footer">
          <ShowBottons e={this.state.estat}/>
        </div>
      </div>
    );
  }
}
