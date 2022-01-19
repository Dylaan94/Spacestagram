import styled from "styled-components";

const HeaderStyles = styled.div`
  background: white;

  .header {
    display: flex;
    border-bottom: 1px solid rgb(219, 219, 219);
    height: 3.5rem;
    padding-left: 20vw;
    padding-right: 20vw;
  }

  .headerLeft,
  .headerRight {
    display: flex;
    font-family: "Grand Hotel", cursive;
    align-items: center;
  }

  .headerLeft {
    font-size: 30px;
  }

  .headerRight {
    margin-left: auto;

    ul {
      display: flex;
      float: left;
      align-items: center;
    }

    li {
      font-size: 20px;
      padding: 10px;
    }

    li > img {
      padding-right: 0px;
    }

    button {
      display: flex;
    }

    button:hover {
      color: #008060;
    }

    .shopifyLogo {
      display: flex;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%; // create circle around logo
      border: 1px solid rgb(219, 219, 219);
    }

    // reset padding to balance against logo
    .shopifyLogoLi {
      padding-right: 0;
    }
  }
`;

const PostStyles = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  .container {
    background: white;
    margin-top: 30px;
    width: clamp(50vw, 600px, 95vw);
    max-height: auto;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 2px;
  }

  header {
    display: flex;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid rgb(219, 219, 219);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .postHeaderLeft {
    font-size: 1.2rem;
    font-weight: 600;
    h2 {
      font-size: 0.9rem;
      color: #797979;
    }
  }

  .postHeaderRight {
    margin-left: auto;
    display: flex;
    font-size: 3rem;
    color: rgb(11, 61, 145);
  }

  .imageContainer {
    // min-height: 600px;
    border-bottom: 1px solid rgb(219, 219, 219);
    img {
      width: 100%;
    }
  }

  .postFooter {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding-top: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1rem;
  }

  .postButtons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
    padding-bottom: 0.5rem;
    p {
      margin-left: auto;
      font-size: 1.4em;
    }
    h2 {
      font-weight: 900;
      font-size: 1.2em;
    }
    h3 {
      color: grey;
    }
    button:hover {
      color: #008060;
    }
  }

  .heartIcon {
    color: #e63946;
  }
  .heartIcon:hover {
    color: black;
  }
`;

const PopupStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;

  .popup-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .popup {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: clamp(50vw, 600px, 95vw);
    height: clamp(50vh, 800px, 80vh);
    background: white;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 5px;
    overflow: auto;

    .popup-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 20vh;
      width: 100%;
      background: rgb(219, 219, 219);
      font-family: "Grand Hotel", cursive;
      h1 {
        margin-bottom: 3vh;
        font-size: 8vh;
        color: #008060;
      }
    }

    .popup-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 65vh;
      h1 {
        font-size: 2em;
        font-weight: 600;
        text-align: center;
        padding: 1rem;
      }

      p {
        color: #6b7177;
        text-align: center;
      }

      h2 {
        font-size: 1.5em;
        font-weight: 600;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 10vw;
      }

      ul {
        padding-bottom: 5vh;
      }

      li {
        color: #6b7177;
        padding-left: 10vw;
        padding-top: 2vh;
      }
    }

    .popup-footer {
      display: flex;
      flex-direction: row;
      height: 15vh;
      width: 100%;
      margin-top: auto;

      .popup-footer-left,
      .popup-footer-right {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        width: 50%;
        border-top: solid 1px rgb(219, 219, 219);
        font-size: 1.2rem;
        font-weight: 900;
      }

      button:hover{
        font-size: 1.3rem;
      }

      .popup-footer-left {
        border-right: solid 0.5px rgb(219, 219, 219);
        color: grey;
      }

      .popup-footer-right {
        border-right: solid 0.5px rgb(219, 219, 219);
        color: #008060;
      }
    }
  }
`;

const SearchFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;

  .searchForm-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .searchForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50vw;
    max-width: 90vw;
    width: clamp(30vw, 600px, 95vw);
    height: clamp(60vh, 800px, 80vh);
    background: white;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 5px;
    overflow: auto;

    .searchForm-header {
      height: 5%;
      width: 100%;
      background: rgb(219, 219, 219);
    }

    .searchForm-container {
      height: auto;
      max-height: 50vh;
      margin-top: 2vh;

      input:focus,
      textarea:focus,
      select:focus {
        outline: none;
      }

      .searchBar {
        width: 80%;
        height: 5vh;
        min-height: 2em;
        border: solid 1px gray;
        border-radius: 5px;
        background-color: #f5f5f5;
        margin-top: 2vh;
        padding-left: 20px;
        font-size: 1rem;
      }

      .searchBar:hover {
        border: solid 1px #008060;
        background-color: white;
      }

      .submitButton {
        height: auto;
        width: auto;
        font-size: 2em;
        font-weight: 600;
        color: white;
        background-color: #008060;
        padding: 0.1em 0.4em 0.1em 0.4em;
        border-radius: 5px;
        margin-top: 3vh;
        margin-bottom: 1.5vh;
      }

      .closeFormButton {
        height: auto;
        width: auto;
        font-size: 1.5em;
        font-weight: 600;
        color: white;
        background-color: #e63946;
        padding: 0.1em 0.4em 0.1em 0.4em;
        border-radius: 5px;
        margin-bottom: 3vh;
      }

      label {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      select {
        font-family: "Roboto", sans-serif;
        width: 25%;
        height: 4vh;
        min-height: 2em;
        border: solid 1px rgb(219, 219, 219);
        border-radius: 5px;
        margin-top: 1vh;
        background-color: white;
      }

      select:hover {
        cursor: pointer;
      }

      h2 {
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
        padding-bottom: 1vh;
        padding-top: 1vh;
      }
      p {
        text-align: center;
        color: #6b7177;
      }
    }
  }
`;

const FooterStyles = styled.div`
  height: 5vh;
  margin-top: 3vh;
  background: white;
  border-top: solid 1px rgb(219, 219, 219);
`;

const Styles = {
  HeaderStyles: HeaderStyles,
  PostStyles: PostStyles,
  PopupStyles: PopupStyles,
  SearchFormStyles: SearchFormStyles,
  FooterStyles: FooterStyles,
};

export default Styles;
