import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import IndexPage from "./pages/index"
import MapPage from "./pages/map"
import { createGlobalStyle } from "styled-components"
import theme from "./components/_theme"
import { GoogleContextProvider } from "./contexts/googleContext"
import { ShortlistContextProvider } from "./contexts/shortlistContext"

const GlobalStyle = createGlobalStyle`

  /* @font-face {
    font-family: Helvetica Neue;
    font-weight: normal;
    src: url(helveticaneue2-medium.woff);
  }
  @font-face {
    font-family: Helvetica Neue;
    font-weight: bold;
    src: url(helveticaneue-bold.woff);
  } */

  *{
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a{
    color: ${theme.blue}
  }

  .list-map{
    height: 100%;
  }
  .detail-map{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }

  :root {
    --reach-dialog: 1;
  }

  [data-reach-dialog-overlay] {
    background: rgba(0,0,0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
  }

  [data-reach-dialog-content] {
    max-width: 600px;
    margin: 0 auto;
    min-height: 100vh;
    background: white;
    outline: none;
    z-index: 1;
    @media screen and (min-width: 700px){
      margin: 10vh auto;
      min-height: auto;
    }
  }

`

const App = () =>
  <ShortlistContextProvider>
    <GoogleContextProvider>
      <Router>
        <GlobalStyle/>
        <Route path="/" component={IndexPage} exact/>
        <Route path="/services" component={MapPage}/>
      </Router>
    </GoogleContextProvider>
  </ShortlistContextProvider>

export default App
