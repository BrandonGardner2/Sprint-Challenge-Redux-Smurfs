import React from "react";
import { connect } from "react-redux";

import { updateSmurf, deleteSmurf } from "../actions";

class Smurf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.height
    };
  }

  handleUpdate = () => {
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.updateSmurf(this.props.smurf.id, newSmurf).then(() => {
      this.updateEditing();
    });
  };

  updateEditing = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.editing) {
      return (
        <div className="smurf-container">
          <input
            value={this.state.name}
            onChange={this.changeHandler}
            name="name"
          />
          <input
            value={this.state.age}
            onChange={this.changeHandler}
            name="age"
          />
          <input
            value={this.state.height}
            onChange={this.changeHandler}
            name="email"
          />
          <button onClick={this.handleUpdate}>Update Smurf</button>
          <button onClick={this.updateEditing}>Cancel</button>
        </div>
      );
    }
    return (
      <div className="smurf-container">
        <h2>{this.props.smurf.name}</h2>
        <p>{this.props.smurf.age}</p>
        <p>{this.props.smurf.height}</p>
        <button onClick={this.updateEditing}>Update Smurf</button>
        <button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>
          Delete Smurf
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { updateSmurf, deleteSmurf }
)(Smurf);
