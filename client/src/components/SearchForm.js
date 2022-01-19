import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

import Styles from "./styles/Styles";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleFormUpdate, handleFormSubmit, handleFormClose } = this.props;
    return (
      <Styles.SearchFormStyles>
        <div className="searchForm-box">
          <div className="searchForm">
            <div className="searchForm-header"></div>
            <div className="searchForm-container">
              <form onSubmit={handleFormSubmit}>
                <label>
                  <h2>Astronomy Photo of the day API:</h2>

                  <p>Returns selected number of photos from</p>
                  <p> the Astronomy Photo of the Day API</p>
                  <select
                    name="APODNum"
                    defaultValue="default"
                    onChange={handleFormUpdate}
                  >
                    <option value="default" disabled>
                      select number
                    </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                  </select>
                </label>
                <label>
                  <h2>NASA Images API search:</h2>
                  <p>How about you try something space related?</p>
                  <p>For example: Moon, Earth, Shuttle etc.</p>
                  <p>
                    Invalid searches will return 3 beautiful photos of the
                    Earth!
                  </p>
                  <input
                    type="text"
                    name="keywordSearch"
                    className="searchBar"
                    placeholder="To infinity and beyond!"
                    onChange={handleFormUpdate}
                  ></input>
                  <select
                    name="nasaImagesNum"
                    defaultValue="default"
                    onChange={handleFormUpdate}
                  >
                    <option value="default" disabled>
                      select number
                    </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                  </select>
                </label>
                <label>
                  <h2>NasaRover API:</h2>
                  <p>
                    Returns 3 pictures from your selected rover's first day on
                    Mars - Sol 1!
                  </p>
                  <select
                    name="nasaRoverName"
                    defaultValue="default"
                    onChange={handleFormUpdate}
                  >
                    <option value="default" disabled>
                      select Rover
                    </option>
                    <option value="Curisoity"> Curiosity </option>
                    <option value="Opportunity"> Opportunity </option>
                    <option value="Spirit"> Spirit </option>
                  </select>
                  <select
                    name="nasaRoverNum"
                    defaultValue="default"
                    onChange={handleFormUpdate}
                  >
                    <option value="default" disabled>
                      select number
                    </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                  </select>
                </label>
                <label>
                  <input className="submitButton" type="submit"></input>
                </label>
                <label>
                  <button className="closeFormButton" onClick={handleFormClose}>
                    {" "}
                    Close{" "}
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </Styles.SearchFormStyles>
    );
  }
}

export default SearchForm;
