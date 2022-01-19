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
            <div className="popup-header">
              <h1>Spacestagram</h1>
            </div>
            <div className="popup-container">
              <h1> Welcome to Spacestagram</h1>
              <p>A simple photo viewing webapp powered by NASA's APIs</p>
              <h2>Features</h2>
              <ul>
                <li> Like photos</li>
                <li> Unlike photos</li>
                <li>View liked photos</li>
                <li>View all photos</li>
                <li>Make your own search!</li>
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
