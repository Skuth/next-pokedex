import { createGlobalStyle, keyframes } from "styled-components";
import { darken } from "polished";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${dom.css()}

  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    &:focus {
      outline-color: ${(props) => props.theme.primary};
    }
  }

  body,
  button,
  input,
  textarea {
    font-family: "Poppins", sans-serif;
    color: ${(props) => props.theme.textColor};
  }

  input {
    accent-color: ${(props) => props.theme.primary};
  }

  button {
    background: transparent;
  }

  body {
    background: ${(props) => props.theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16px * 0.9375 -> 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 16px * 0.875 -> 14px
    }

    @media (max-width: 520px) {
      font-size: 75%; // 16px * 0.75 -> 12px
    }
  }

  body,
  html,
  #__next {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6, strong, b {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ul,
  ol {
    list-style-position: inside;
  }

  img {
    user-select: none;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.65rem;
    background-color: ${(props) => props.theme.white};
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 4px;
    background-color: ${(props) => props.theme.white};
    @media (max-width: 800px) {
      width: 4px;
    }
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.65rem;
    background-color: ${(props) => props.theme.gray};
    &:hover {
      background-color: ${(props) => darken(0.2, props.theme.gray)};
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
    transition: color 0.25s;
    &:hover {
      text-decoration: none;
      color: ${(props) => props.theme.primary};
    }
  }

  .pointer {
    cursor: pointer;
  }

  .fadeIn {
    animation: 0.5s ${fadeIn};
  }
`;
