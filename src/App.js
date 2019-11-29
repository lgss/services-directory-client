import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import IndexPage from "./pages/index"
import MapPage from "./pages/map"
import { createGlobalStyle } from "styled-components"
import theme from "./components/_theme"

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Helvetica Neue;
    font-weight: normal;
    src: url(helveticaneue-medium.woff);
  }
  @font-face {
    font-family: Helvetica Neue;
    font-weight: bold;
    src: url(helveticaneue-bold.woff);
  }

  *{
    font-family: Helvetica Neue, Arial, Helvetica, sans-serif, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a{
    color: ${theme.blue}
  }
`


const App = () =>
    <Router>
      <GlobalStyle/>
      <Route path="/" component={IndexPage} exact/>
      <Route path="/map" component={MapPage} exact/>
    </Router>

export default App
