import React, { Component } from "react";
import Styles from "./styles/Styles";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

// fontawesome icons

const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const astronautIcon = <FontAwesomeIcon icon={faUserAstronaut} />;

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      title,
      date,
      explanation,
      copyright,
      imageURL,
      dataAccessed,
    } = this.props; // destructure props
    return (
      <Styles.ControllerStyles>
        <div className="container">
          <header className="postHeader">
            <div className="postHeaderLeft">
              <h1>{title}</h1>
            </div>
            <div className="postHeaderRight">
              <p alt="Astronaut icon">{astronautIcon}</p>
            </div>
          </header>
          <div className="imageContainer">
            <img src={imageURL} alt={"image of " + title + ""}></img>
          </div>

          

          <div className="postFooter">
            <div className="postButtons">
              <div className = "metadata">
                <h2>{copyright}</h2>
                <h3>{date}</h3>
              </div>
              <button className="likeButton">
                <p>{heartIcon}</p>
              </button>
            </div>
            <div className="photoInfo"> {explanation}</div>
          </div>



        </div>
      </Styles.ControllerStyles>
    );
  }
}

export default Controller;
