import * as React from "react"
import { styled } from "styled-components"
import { useState, useEffect } from "react"

import { ThemeProvider } from "styled-components"
import { themes, GlobalStyle } from "../components/globalStyles.js"



const NotFoundPage = () => {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
  const [theme,setTheme] = useState(darkModeQuery.matches ? "dark" : "light")
  
  useEffect(() => {
    darkModeQuery.addEventListener('change', event => {
      setTheme(event.matches ? "dark" : "light")
    }) 
  })
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle/>
        <Not>404: This page could not be found.</Not>
      </ThemeProvider>
    </>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

const Not = styled.div`
  font-weight:200;
  font-size:1.2em;
  text-align:center;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`