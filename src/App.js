import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import IndexPage from "./pages/index"
import MapPage from "./pages/map"

const App = () =>
    <Router>
      <Route path="/" component={IndexPage} exact/>
      <Route path="/map" component={MapPage} exact/>
    </Router>

export default App
