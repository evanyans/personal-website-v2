import * as React from "react"
import { useState, useEffect } from "react"

import { ThemeProvider } from "styled-components"
import { themes, GlobalStyle } from "../components/globalStyles.js"

import { Display } from "../components/Display"



const IndexPage = () => {
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
        <Display/>
      </ThemeProvider>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Evan Yan</title>


