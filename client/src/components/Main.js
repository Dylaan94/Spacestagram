import React, { Component } from "react";

// component imports
import Header from "./Header";
import Controller from "./Controller";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apodData: {},
    };
    this.callNasaAPI = this.callNasaAPI.bind(this);
    this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
  }

  callNasaAPI = () => {
    if (localStorage.getItem("apodData") !== null) {
      // check if cached
      this.loadFromLocalStorage();
    } else {
      fetch("http://localhost:9000/nasaAPI")
        .then((res) => res.json())
        .then((resJSON) => {
          console.log(resJSON);
          localStorage.setItem("apodData", JSON.stringify(resJSON));
          this.setState(
            {
              apodData: resJSON,
            },
            () => {
              console.log(this.state); // callback to check state
              console.log(localStorage);
            }
          );
        });
    }
  };

  loadFromLocalStorage = () => {
    console.log("loading from local storage");
    let apodData = JSON.parse(localStorage.getItem("apodData"));
    this.setState(
      {
        apodData: apodData,
      },
      () => {
        console.log(this.state); // callback to check state
        console.log(this.state.apodData.title);
      }
    );
  };

  componentDidMount() {
    this.callNasaAPI();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Controller
          title={this.state.apodData.title}
          date={this.state.apodData.date}
          explanation={this.state.apodData.explanation}
          copyright={this.state.apodData.copyright}
          imageURL={this.state.apodData.imageURL}
          dataAccessed={this.state.apodData.dataAccessed}
        ></Controller>
        <Controller></Controller>
      </div>
    );
  }
}

export default Main;
