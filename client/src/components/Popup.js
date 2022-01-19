import React, { Component } from "react";
import Styles from "./styles/Styles";

//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const searchIcon = <FontAwesomeIcon icon={faSearch} />;
const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />;


class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    const { handlePopup } = this.props;
    return (
      <Styles.PopupStyles>
        <div className="popup-box">
          <div className="popup">
            <div className="popup-header">
              <h1>Spacestagram</h1>
            </div>
            <div className="popup-container">
              <h1> Welcome to Spacestagram</h1>
              <p>A simple photo viewing webapp powered by NASA's APIs</p>
              <h2>Features</h2>
              <ul>
                            <li> {thumbsUp} Click the thumbs up to like, red heart to dislike</li>
                
                            <li> {heartIcon} View liked photos by clicking the heart icon in the header</li>
                            <li> {homeIcon} View all photos by clicking home icon in the header</li>
                            <li> {searchIcon} Create your own search by clicking the search icon</li>
              </ul>
              <div className="popup-footer">
                <div className="popup-footer-left">
                  <button
                    className="gitHubButton"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://github.com/dylaan94/Spacestagram",
                        "_blank"
                      );
                    }}
                  >
                    View on github
                  </button>
                </div>
                <div className="popup-footer-right">
                  <button className="closeButton" onClick={handlePopup}>
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Styles.PopupStyles>
    );
  }
}

export default Popup;
