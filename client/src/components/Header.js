import { Component } from "react";

import Styles from "./styles/Styles";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Styles.HeaderStyles>
        <div className="header">
          <div className="headerLeft">
            <h1>Spacestagram</h1>
          </div>
          <div className="headerRight">
            <ul>
              <li>
                <button className="homeButton">{homeIcon}</button>
              </li>
              <li>
                <button className="likedPhotosButton">{heartIcon}</button>
              </li>
              <li className = "shopifyLogoLi">
                <img
                  src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-shopping-bag-full-color-66166b2e55d67988b56b4bd28b63c271e2b9713358cb723070a92bde17ad7d63.svg"
                  alt="Shopify logo"
                  className="shopifyLogo"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </Styles.HeaderStyles>
    );
  }
}

export default Header;
