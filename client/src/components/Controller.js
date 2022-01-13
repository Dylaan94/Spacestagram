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
          <div className="postHeader">
            <h1>Image by: {copyright}</h1>
            <h2>Image title: {title}</h2>
            <p alt="Astronaut icon">{astronautIcon}</p>
          </div>
          <div className="imageContainer">
            <img src={imageURL} alt={"image of " + title + ""}></img>
          </div>
          <div className="postFooter">
            <div className="photoInfo"> {explanation}</div>
            <div className="postButtons">
              <button className="likeButton">
                <p>{date}</p>
                {heartIcon}
              </button>
            </div>
          </div>
        </div>
      </Styles.ControllerStyles>
    );
  }
}

export default Controller;
