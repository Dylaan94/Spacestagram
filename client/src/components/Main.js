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
        roverData: [],
        nasaImagesData: [],
      },
      likedPhotos: [],
      pageStatus: "home",
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
        fetch("http://localhost:9000/nasaRoverAPI"),
        fetch("http://localhost:9000/nasaImagesAPI"),
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
            let nasaImagesData = data[2];
            localStorage.setItem("apodData", JSON.stringify(apodData)); // store to cache
            localStorage.setItem("roverData", JSON.stringify(roverData));
            localStorage.setItem(
              "nasaImagesData",
              JSON.stringify(nasaImagesData)
            );
            this.setState(
              {
                nasaAPIData: {
                  apodData: apodData,
                  roverData: roverData,
                  nasaImagesData: nasaImagesData,
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
    let nasaImagesData = JSON.parse(localStorage.getItem("nasaImagesData"));
    this.setState(
      {
        nasaAPIData: {
          apodData: apodData,
          roverData: roverData,
          nasaImagesData: nasaImagesData,
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
    let roverData = this.state.nasaAPIData.roverData;
    let nasaImagesData = this.state.nasaAPIData.nasaImagesData;
    return (
      <div>
        {console.log(roverData)}
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
        {/* map over nasaImagesData to render multiple components */}
        {nasaImagesData.map(
          ({ name, date, explanation, copyright, imageURL, id }) => (
            <Controller
              title={name}
              date={date}
              explanation={explanation}
              copyright={copyright}
              imageURL={imageURL}
              key={id}
              id={id}
            ></Controller>
          )
        )}

        {/* map over roverData to render multiple components */}
        {roverData.map(({ name, date, cameraFull_Name, sol, id, imageURL }) => (
          <Controller
            title={name + " - day(Sol): " + sol}
            date={date}
            explanation={
              "This is a photo taken by the " +
              cameraFull_Name +
              " from The " +
              name +
              " Rover " +
              "on Sol:" +
              sol +
              " or " +
              date +
              " in Earth years! Sol comes from the latin word for the sun, and refers to a solar day on Mars."
            }
            imageURL={imageURL}
            key={id}
            id={id}
          >
            {" "}
          </Controller>
        ))}
      </div>
    );
  }
}

export default Main;
