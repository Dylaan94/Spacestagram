import React, { Component } from "react";

import Styles from "./styles/Styles";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleFormUpdate, handleFormSubmit } = this.props;
    return (
      <Styles.SearchFormStyles>
        <div className="searchForm-box">
          <div className="searchForm">
            <div className="searchForm-header"></div>
            <div className="searchForm-container">
              <form>
                <label>
                  <h2>Astronomy Photo of the day API:</h2>
                  <h3>How many of the latest photos would you like to see?</h3>
                  <select name="APODNum" onChange={handleFormUpdate}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                  </select>
                </label>
                <label>
                  <h2>NASA Images API</h2>
                  <h3>Please search a keyword and select number of photos</h3>
                  <input
                    type="text"
                    name="keywordSearch"
                    onChange={handleFormUpdate}
                  ></input>
                  <select name="nasaImagesNum" onChange={handleFormUpdate}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                  </select>
                </label>
                <label>
                  <h2>NasaRover API:</h2>
                  <h3>Please select Rover name and Date</h3>
                  <select name="nasaRoverName" onChange={handleFormUpdate}>
                    <option value="Curisoity"> Curiosity </option>
                    <option value="Opportunity"> Opportunity </option>
                    <option value="Spirit"> Spirit </option>
                  </select>
                </label>
                <label>
                  <input type="submit" onClick={handleFormSubmit}></input>
                </label>
              </form>
            </div>
            <div className="searchForm-footer"></div>
          </div>
        </div>
      </Styles.SearchFormStyles>
    );
  }
}

export default SearchForm;
