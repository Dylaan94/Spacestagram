import styled from "styled-components";

const HeaderStyles = styled.div`
  background: white;

  .header {
    display: flex;
    border-bottom: 1px solid rgb(219, 219, 219);
    height: 60px;
    padding-left: 10vw;
    padding-right: 10vw;
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
    .shopifyLogoLi{
      padding-right: 0;
    }
  }
`;

const Styles = {
  HeaderStyles: HeaderStyles,
};

export default Styles;
