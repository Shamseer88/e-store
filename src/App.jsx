import React from "react";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TopNavbar />
      </div>
    </ThemeProvider>
  );
};

export default App;
