import React, { Component } from "react";

// component imports

import Header from "./Header";
import Controller from "./Controller"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.callNasaApi = this.callNasaApi.bind(this)
    this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this)
  }

  callNasaApi = () => {

  }

  loadFromLocalStorage = () => {

  }

  componentDidMount() {
    this.callNasaApi()
  }

  render() {
    return (
      <div>
            <Header></Header>
            <Controller></Controller>
            <Controller></Controller>
        <h1>This is the main component</h1>
      </div>
    );
  }
}

export default Main;
