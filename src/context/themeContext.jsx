import { createContext, useContext, useEffect, useState } from "react";
import classes from "../app.scss";

export const ThemeContext = createContext();

export const themeState = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const theme = toggle ? "dark" : "light";
  useEffect(() => {
    document.documentElement.setAttribute(
      "class",
      theme == "dark" ? `${classes.dark}` : `${classes.light}`
    );
  }, [toggle]);
  const themeAction = () => {
    setToggle((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ toggle, themeAction }}>
      {children}
    </ThemeContext.Provider>
  );
};
