import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      white: string;
      background: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      white?: string;
      background?: string;
    };
  }
}
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      "DM Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  custom: {
    white: "#ffffff",
    background: "#fcfcfc",
  },
  palette: {
    primary: {
      main: "#1ACBE9",
      light: "#75FD92",
      dark: "#D8B53A",
    },
    secondary: {
      main: "#75FD92",
      light: "#F9FBFD",
      dark:'#D7EFFF'
    },
    error: {
      main: "#CD4343",
      light: "#DB5252",
      dark: "#A64A4A",
    },
    success: {
      main: "#47B5FF",
      light: "#256D85",
      dark:"#06283D"
    },
    warning: {
      main: "#D4A90D",
    },
    text: {
      primary: "#fff",
      secondary: "#444444",
    },
    grey: {
      50: "#999999",
      100: "#949494",
      600: "#616161",
    },
  },
});

export default theme;
