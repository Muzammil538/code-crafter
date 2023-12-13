import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100%;
  }
  a, li {
    text-decoration: none;
    list-style: none;
    color: black;
  }
`;