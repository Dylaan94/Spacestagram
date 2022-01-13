import React, { Component } from "react";
import Styles from "./styles/Styles";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const heartIcon = <FontAwesomeIcon icon={faHeart} />;

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Styles.ControllerStyles>
        <div className="container">
          <div className="postHeader"></div>
          <div className="imageContainer"></div>

          <div className="postFooter">
            <div className="photoInfo"> blah blah</div>
            <div className="postButtons">
              <button className="likeButton">{heartIcon}</button>
            </div>
          </div>
        </div>
      </Styles.ControllerStyles>
    );
  }
}

export default Controller;
