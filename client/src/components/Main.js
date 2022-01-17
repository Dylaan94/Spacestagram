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
    // creates copy of state and updates liked state
    let arrayPosition;
    let newState = this.state;

    // checks id and returns array position
    for (let i = 0; i < this.state.nasaAPIData[apiName].length; i++) {
      if (this.state.nasaAPIData[apiName][i].id === id) {
        arrayPosition = i;
        console.log("the position in the array is" + i);
      }
    }

    if (this.state.nasaAPIData[apiName][arrayPosition].liked === true) {
      newState.nasaAPIData[apiName][arrayPosition].liked = false;
    } else {
      newState.nasaAPIData[apiName][arrayPosition].liked = true;
    }

    this.setState(newState, () => {
      console.log(this.state); // callback to check state
    });
  };

  // view homepage & view liked photos
  // sets to true so that the posts components can be dynamically rendered
  handleViewHome = () => {
    this.setState(
      {
        isHome: true,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // view liked photos
  handleViewLikedPhotos = () => {
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
    const { apodData, roverData, nasaImagesData } = this.state.nasaAPIData 
    const isHome = this.state.isHome;

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

        {/* if isHome returns true, all posts are rendered. 
        if false returns all liked photos */}
        {isHome
          ? apodData.map(
              ({
                title,
                date,
                explanation,
                copyright,
                imageURL,
                id,
                liked,
              }) => (
                <Post
                  title={title}
                  date={date}
                  explanation={explanation}
                  copyright={copyright}
                  imageURL={imageURL}
                  key={id}
                  id={id}
                  likedStatus={liked}
                  apiName={"apodData"}
                  apiFullName={"Astrology Picture of the Day"}
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
                  id,
                  liked,
                }) => (
                  <Post
                    title={title}
                    date={date}
                    explanation={explanation}
                    copyright={copyright}
                    imageURL={imageURL}
                    key={id}
                    id={id}
                    likedStatus={liked}
                    apiName={"apodData"}
                    apiFullName={"Astrology Picture of the Day"}
                    handleLikedPhoto={this.handleLikedPhoto}
                  ></Post>
                )
              )}

        {/* map over nasaImagesData to render components */}
        {isHome
          ? nasaImagesData.map(
              ({ name, date, explanation, copyright, imageURL, id, liked }) => (
                <Post
                  title={name}
                  date={date}
                  explanation={explanation}
                  copyright={copyright}
                  imageURL={imageURL}
                  key={id}
                  id={id}
                  likedStatus={liked}
                  apiName={"nasaImagesData"}
                  apiFullName={"Image and Video Library"}
                  handleLikedPhoto={this.handleLikedPhoto}
                ></Post>
              )
            )
          : // filter through nasaImages data and creates new array of liked items
            // liked items then mapped as components
            nasaImagesData
              .filter((item) => item.liked)
              .map(
                ({
                  name,
                  date,
                  explanation,
                  copyright,
                  imageURL,
                  id,
                  liked,
                }) => (
                  <Post
                    title={name}
                    date={date}
                    explanation={explanation}
                    copyright={copyright}
                    imageURL={imageURL}
                    key={id}
                    id={id}
                    likedStatus={liked}
                    apiName={"nasaImagesData"}
                    apiFullName={"Image and Video Library"}
                    handleLikedPhoto={this.handleLikedPhoto}
                  ></Post>
                )
              )}

        {/* map over roverData to render components */}
        {isHome
          ? roverData.map(
              ({ name, date, cameraFull_Name, sol, id, imageURL, liked }) => (
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
                  likedStatus={liked}
                  apiName={"roverData"}
                  apiFullName={"Mars Rover Photos"}
                  handleLikedPhoto={this.handleLikedPhoto}
                ></Post>
              )
            )
          : roverData
              .filter((item) => item.liked)
              .map(
                ({ name, date, cameraFull_Name, sol, id, imageURL, liked }) => (
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
                    likedStatus={liked}
                    apiName={"roverData"}
                    apiFullName={"Mars Rover Photos"}
                    handleLikedPhoto={this.handleLikedPhoto}
                  ></Post>
                )
              )}
      </div>
    );
  }
}

export default Main;
