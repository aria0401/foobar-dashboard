import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../modules/theme";
import { GlobalStyles } from "../modules/global";

import Toggle from "./Toggle";

function Header(props) {
  // Toggle theme functionality from css tricks https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
  const [theme, setTheme] = useState("light");

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="Header">
      <h1>{props.data.bar.name}</h1>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </>
      </ThemeProvider>
    </div>
  );
}

export default Header;
