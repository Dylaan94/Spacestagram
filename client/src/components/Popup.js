import React, { Component } from "react";
import Styles from "./styles/Styles";

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
            <div className="popup-header"></div>
            <div className="popup-container">
              <h1> Welcome to Spacestagram</h1>
              <p>A simple ... powered by NASA APIs</p>
              <h2>Features</h2>
              <ul>
                <li> Like photos by clicking the thumb</li>
                <li> Unlike by clicking the red heart</li>
                <li>
                  View all liked photos by clicking the black heart in the
                  header
                </li>
                <li>
                  View all photos by clicking the home button in the header
                </li>
              </ul>
            </div>
            <div className="popup-footer">
              <button className="gitHubButton">
                Click here to visit my github
              </button>
              <button className="closeButton" onClick={handlePopup}>
                Click to close
              </button>
            </div>
          </div>
        </div>
      </Styles.PopupStyles>
    );
  }
}

export default Popup;
