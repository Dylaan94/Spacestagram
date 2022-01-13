import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderStyles = styled.div`
  background: white;

  .header {
    display: flex;
    border-bottom: 1px solid rgb(219, 219, 219);
    height: 60px;
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
      height: 40px;
      width: 40px;
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

  .container {
    background: white;
    margin-top: 30px;
    width: 600px;
    min-height: 600px;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 2px;
  }
  .postHeader {
    height: 70px;
    border-bottom: 1px solid rgb(219, 219, 219);
  }
  .imageContainer {
    min-height: 600px;
    border-bottom: 1px solid rgb(219, 219, 219);
  }

  .postFooter {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .postButtons {
    font-size: 30px;
    margin-left: auto;
  }
`;

const Styles = {
  HeaderStyles: HeaderStyles,
  ControllerStyles: ControllerStyles,
};

export default Styles;
