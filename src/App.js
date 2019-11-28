import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import IndexPage from "./pages/index"
import MapPage from "./pages/map"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Helvetica Neue;
    font-weight: 700;
    src: url(helveticaneue-bold.woff);
  }
  @font-face {
    font-family: Helvetica Neue;
    font-weight: 400;
    src: url(helveticaneue-medium.woff);
  }

  *{
    font-family: "Helvetica Neue", "Arial" sans-serif;
  }
`


const App = () =>
    <Router>
      <GlobalStyle/>
      <Route path="/" component={IndexPage} exact/>
      <Route path="/map" component={MapPage} exact/>
    </Router>

export default App
