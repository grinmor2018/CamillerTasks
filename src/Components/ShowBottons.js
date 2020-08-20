import React, { Component } from "react";

export default class ShowBottons extends Component {
  render() {
    if (this.props.e === true) {
      return (
        <div className="container">
          <div className="row">
            <div className="w-50">
              <button type="button" className="btn btn-primary btn-sm">
                Edit
              </button>
            </div>
            <div className="w-50">
              <button type="submit" className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
