import React from "react";
import logo from "./logo.svg";
import styled, {ThemeProvider} from "styled-components";
import "./styles/App.scss";
import "./styles/button.scss";

const Button = styled.button`
  border: none;
  border-radius: ${(props) => props.theme.base_radius};
  cursor: pointer;
  display: inline-block;
  font-size: ${(props) => props.theme.base_font_size};
  font-weight: ${(props) => props.theme.font_semibold};
  line-height: 2.5;
  padding: 0 12px;
  position: relative;
  text-align: center;

  &:hover {
    background: ${(props) => props.theme.blue};
  }
`;

const theme = {
  base_radius: "0.25rem",
  base_font_size: "16px",
  font_semibold: "600",
  blue: "rgb(12, 122, 192)",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="btn">SASS Button</button>
          <Button>styled-components button</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
