import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import IndexPage from "./pages/index"
import MapPage from "./pages/map"
import { createGlobalStyle } from "styled-components"
import theme from "./components/_theme"
import { GoogleContextProvider } from "./contexts/googleContext"

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
    min-height: 250px;
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
    @media screen and (min-width: 700px){
      margin: 10vh auto;
      min-height: auto;
    }
  }

`

const App = () =>
    <GoogleContextProvider>
      <Router>
        <GlobalStyle/>
        <Route path="/" component={IndexPage} exact/>
        <Route path="/services" component={MapPage}/>
      </Router>
    </GoogleContextProvider>

export default App
