import React, { Component } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";

class CreateSmurf extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.createSmurf(newSmurf).then(() => {
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={this.changeHandler}
        />
        <input
          placeholder="height"
          name="height"
          value={this.state.height}
          onChange={this.changeHandler}
        />
        <button>Add Smurf!</button>
      </form>
    );
  }
}

export default connect(
  null,
  { createSmurf }
)(CreateSmurf);
