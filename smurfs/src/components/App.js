import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import "./App.css";

import CreateSmurf from "./CreateSmurf";
import SmurfList from "./SmurfList";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <CreateSmurf />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({
  smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
