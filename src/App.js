import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { GlobalStyle } from "./GlobalStyle";
import NotificationPopUp from "./components/NotificationPopUp";
import { useState } from "react";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  window.toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <NotificationPopUp />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
