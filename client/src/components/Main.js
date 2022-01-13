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
    fetch("localhost:9000/nasaAPI").then((res) => {
      console.log(res);
    })
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
      </div>
    );
  }
}

export default Main;
