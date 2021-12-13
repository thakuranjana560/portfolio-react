import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../organisms/Themes";
import { NavLink } from "react-router-dom";

const Logo = styled(NavLink)`
  // text-decoration:none;
`;
const H1 = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;

  z-index: 3;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;
const LogoComponent = (props) => {
  return <Logo to="/"><H1 color={props.theme}>Anjana Thakur</H1></Logo>;
};

export default LogoComponent;
