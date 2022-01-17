import React, { Component } from "react";
import Styles from "./styles/Styles";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faUserAstronaut, faHeart } from "@fortawesome/free-solid-svg-icons";

// fontawesome icons

const thumbIcon = <FontAwesomeIcon icon={faThumbsUp} />;
const heartSolidIcon = <FontAwesomeIcon icon={faHeart} />;
const astronautIcon = <FontAwesomeIcon icon={faUserAstronaut} />;

class Post extends Component {
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
      id,
      likedStatus,
      apiName,
      handleLikedPhoto,
    } = this.props; // destructure props
    return (
      <Styles.PostStyles>
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
              <div className="metadata">
                <h2>{copyright}</h2>
                <h3>{date}</h3>
              </div>
              <button
                className="likeButton"
                onClick={() => {
                  handleLikedPhoto( id, apiName); // sends data id to main
                }}
              >
                {/* renders thumb for unliked, heart for liked */}
                {likedStatus ? <p className="heartIcon">{heartSolidIcon}</p> : <p>{thumbIcon}</p>}
              </button>
            </div>
            <div className="photoInfo"> {explanation}</div>
          </div>
        </div>
      </Styles.PostStyles>
    );
  }
}

export default Post;
