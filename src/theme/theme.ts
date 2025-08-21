"use client";

import { createTheme } from "@mui/material/styles";

// Text: #171717
// Background: #39a7db
// Primary: #f58447
// Secondary: #dccec7
// Accent: #faead6

//eller

// Background: #39a7db
// Primary: #dccec7
// Secondary: #f58447
// Accent: #faead6

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-quicksand)",
  },
  palette: {
    primary: {
      main: "#f58447",
    },
    secondary: {
      main: "#dccec7",
    },
    background: {
      default: "#39a7db",
      paper: "#dccec7",
    },
    text: {
      secondary: "rgba(23,23,23,0.6)",
      disabled: "rgba(23,23,23,0.38)",
      primary: "rgba(23,23,23,0.8)",
    },
  },
});

export default theme;
