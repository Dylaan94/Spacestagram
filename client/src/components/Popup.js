import { Component } from "react";

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
            <button className="closeButton" onClick={handlePopup}>
              Click to close
            </button>
            <h1> this is the popup, hello</h1>
          </div>
        </div>
      </Styles.PopupStyles>
    );
  }
}

export default Popup;
