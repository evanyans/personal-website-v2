import { createGlobalStyle } from "styled-components"

export const themes = {
    light: {
      colors: {
        highlight: "#4DF1EF",
        text: "black",
        subtext: "#595959",
        background: "white",
        button: "#EDF2F6",
        buttonHover: "#E1E8EE",
        hoverBackground: "rgba(0, 0, 0, 0.01)",
        hoverBorder: "rgba(0, 0, 0, 0.1)",
        underline: "#EA4EA6"
      }
    },
    dark: {
      colors: {
        highlight: "#4DF1EF",
        text: "white",
        subtext: "#A1A1A6",
        background: "black",
        button: "#1F1F1F",
        buttonHover: "#282828",
        hoverBackground: "rgba(255, 255, 255, 0.05)",
        hoverBorder: "rgba(255, 255, 255, 0.05)",
        underline: "#FDFC05",
      }
    }
  }

export const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior:smooth;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen-Sans, Ubuntu, Cantarell,
                    "Helvetica Neue", sans-serif;
        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text};
    }
    ::selection {
        background: ${({theme}) => theme.colors.highlight};
    }

    
`

