import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
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

const ControllerStyles = styled.div`
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
  }
`;

const Styles = {
  HeaderStyles: HeaderStyles,
  ControllerStyles: ControllerStyles,
};

export default Styles;
