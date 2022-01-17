import React, { Component } from "react";

// component imports
import Header from "./Header";
import Post from "./Post";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nasaAPIData: {
        apodData: [],
        roverData: [],
        nasaImagesData: [],
      },
      likedPhotos: [],
      isHome: true, // page status - home or liked
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
    let arrayPosition;

    // update state with liked status
    // creates copy of state, updates liked to true and then sets

    // checks id and returns array position
    for (let i = 0; i < this.state.nasaAPIData[apiName].length; i++) {
      if (this.state.nasaAPIData[apiName][i].id === id) {
        arrayPosition = i;
        console.log("the position in the array is" + i);
      }
    }
    // creates new state object and set to true
    let newState = this.state;
    newState.nasaAPIData[apiName][arrayPosition].liked = true;

    this.setState(newState, () => {
      console.log(this.state); // callback to check state
    });
  };

  handleViewHome = () => {
    console.log("view home");
    this.setState(
      {
        isHome: true,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleViewLikedPhotos = () => {
    console.log("view liked photos");
    this.setState(
      {
        isHome: false,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  componentDidMount() {
    this.callNasaAPI();
  }

  render() {
    let apodData = this.state.nasaAPIData.apodData;
    let roverData = this.state.nasaAPIData.roverData;
    let nasaImagesData = this.state.nasaAPIData.nasaImagesData;
    let isHome = this.state.isHome;

    return (
      <div>
        {console.log(roverData)}
        <Header
          handleViewHome={this.handleViewHome}
          handleViewLikedPhotos={this.handleViewLikedPhotos}
        ></Header>

        {/* renders pic of the day,
        currently array only has 1 item, but written with map for
        maintainability and upgrade purposes */}

        {/* When isHome is true, renders all posts, when false renders
        liked photos */}
        {isHome
          ? apodData.map(
              ({
                title,
                date,
                explanation,
                copyright,
                imageURL,
                dateAccessed,
                id,
              }) => (
                <Post
                  title={title}
                  date={date}
                  explanation={explanation}
                  copyright={copyright}
                  imageURL={imageURL}
                  dateAccessed={dateAccessed}
                  key={id}
                  id={id}
                  apiName={"apodData"}
                  handleLikedPhoto={this.handleLikedPhoto}
                ></Post>
              )
            )
          : apodData
              .filter((item) => item.liked)
              .map(
                ({
                  title,
                  date,
                  explanation,
                  copyright,
                  imageURL,
                  dateAccessed,
                  id,
                }) => (
                  <Post
                    title={title}
                    date={date}
                    explanation={explanation}
                    copyright={copyright}
                    imageURL={imageURL}
                    dateAccessed={dateAccessed}
                    key={id}
                    id={id}
                    apiName={"apodData"}
                    handleLikedPhoto={this.handleLikedPhoto}
                  ></Post>
                )
              )}

        {/* map over nasaImagesData to render components */}
        {isHome
          ? nasaImagesData.map(
              ({ name, date, explanation, copyright, imageURL, id }) => (
                <Post
                  title={name}
                  date={date}
                  explanation={explanation}
                  copyright={copyright}
                  imageURL={imageURL}
                  key={id}
                  id={id}
                  apiName={"nasaImagesData"}
                  handleLikedPhoto={this.handleLikedPhoto}
                ></Post>
              )
            )
          : // filter through nasaImages data and creates new array of liked items
            // liked items then mapped as components
            nasaImagesData
              .filter((item) => item.liked)
              .map(({ name, date, explanation, copyright, imageURL, id }) => (
                <Post
                  title={name}
                  date={date}
                  explanation={explanation}
                  copyright={copyright}
                  imageURL={imageURL}
                  key={id}
                  id={id}
                  apiName={"nasaImagesData"}
                  handleLikedPhoto={this.handleLikedPhoto}
                ></Post>
              ))}

        {/* map over roverData to render components */}
        {isHome
          ? roverData.map(
              ({ name, date, cameraFull_Name, sol, id, imageURL }) => (
                <Post
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
                  apiName={"roverData"}
                  handleLikedPhoto={this.handleLikedPhoto}
                ></Post>
              )
            )
          : roverData
              .filter((item) => item.liked)
              .map(({ name, date, cameraFull_Name, sol, id, imageURL }) => (
                <Post
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
                  apiName={"roverData"}
                  handleLikedPhoto={this.handleLikedPhoto}
                ></Post>
              ))}
      </div>
    );
  }
}

export default Main;
