import React, { Component } from "react";

// component imports
import Header from "./Header";
import Controller from "./Controller";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nasaAPIData: {
        apodData: {},
      },
      likedPhotos: [],
    };
    this.callNasaAPI = this.callNasaAPI.bind(this);
    this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
    this.handleLikedPhoto = this.handleLikedPhoto.bind(this);
    this.handleViewHome = this.handleViewHome.bind(this);
    this.handleViewLikedPhotos = this.handleViewLikedPhotos.bind(this);
  }

  callNasaAPI = () => {
    if (localStorage.getItem("apodData") !== null) {
      // check if cached
      this.loadFromLocalStorage();
    } else {
      Promise.all([
        fetch("http://localhost:9000/nasaAPI"),
        fetch("http://localhost:9000/nasaRoverApi"),
      ])
        // map through all results and run text();
        .then((res) => {
          console.log(res);
          Promise.all(
            res.map((res) => {
              return res.json();
            })
          ).then((data) => {
            let apodData = data[0];
            let roverData = data[1];
            localStorage.setItem("apodData", JSON.stringify(apodData)); // store to cache
            localStorage.setItem("roverData", JSON.stringify(roverData));
            this.setState(
              {
                nasaAPIData: {
                  apodData: apodData,
                  roverData: roverData,
                },
              },
              () => {
                console.log(this.state);
                console.log(localStorage);
              }
            );
          });
        });
    }
  };

  loadFromLocalStorage = () => {
    console.log("loading from local storage");
    let apodData = JSON.parse(localStorage.getItem("apodData"));
    let roverData = JSON.parse(localStorage.getItem("roverData"));
    this.setState(
      {
        nasaAPIData: {
          apodData: apodData,
          roverData: roverData,
        },
      },
      () => {
        console.log(this.state); // callback to check state
      }
    );
  };

  handleLikedPhoto = (id, apiName) => {
    console.log(id);
    console.log(apiName);
    console.log("photo liked!");

    // update state with liked status
    if (apiName === "apodData") {
      this.setState(
        (prevState) => ({
          nasaAPIData: {
            ...prevState.nasaAPIData,
            apodData: {
              ...prevState.nasaAPIData.apodData,
              liked: true,
            },
          },
        }),
        () => {
          console.log(this.state);
        }
      );
    } else {
      // fill in for different api types here
    }

    // for (let i = 0; i < this.state.nasaAPIData.apiName.length; i++) {
    //   if (this.state.nasaAPIData.apiName[i].id === id) {

    //   }

    // }
  };

  handleViewHome = () => {
    console.log("view home");
  };

  handleViewLikedPhotos = () => {
    console.log("view liked photos");
  };

  componentDidMount() {
    this.callNasaAPI();
  }

  render() {
    return (
      <div>
        <Header
          handleViewHome={this.handleViewHome}
          handleViewLikedPhotos={this.handleViewLikedPhotos}
        ></Header>
        <Controller
          title={this.state.nasaAPIData.apodData.title}
          date={this.state.nasaAPIData.apodData.date}
          explanation={this.state.nasaAPIData.apodData.explanation}
          copyright={this.state.nasaAPIData.apodData.copyright}
          imageURL={this.state.nasaAPIData.apodData.imageURL}
          dataAccessed={this.state.nasaAPIData.apodData.dataAccessed}
          id={this.state.nasaAPIData.apodData.id}
          apiName={"apodData"}
          handleLikedPhoto={this.handleLikedPhoto}
        ></Controller>
        <Controller></Controller>
      </div>
    );
  }
}

export default Main;
