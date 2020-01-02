import React, { useEffect } from "react"
import { Route, Switch, useHistory } from "react-router-dom"
import IndexPage from "./pages/index"
import MapPage from "./pages/map"
import FeedbackPage from "./pages/feedback"
import { createGlobalStyle } from "styled-components"
import theme from "./components/_theme"
import { GoogleContextProvider } from "./contexts/googleContext"
import { ShortlistContextProvider } from "./contexts/shortlistContext"
import { initGA, logPageView } from "./lib/analytics"

const GlobalStyle = createGlobalStyle`

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
    max-width: 85vw;
    margin: 15vw auto;
    background: white;
    outline: none;
    z-index: 1;
    @media screen and (min-width: 700px){
      max-width: 600px;
      margin: 10vh auto;
      min-height: auto;
    }
  }

`

const App = () => {

  initGA()

  const history = useHistory()

  useEffect(() => {
    logPageView(history)
  }, [history])
  
  return(
    <ShortlistContextProvider>
      <GoogleContextProvider>
          <GlobalStyle/>
          <Switch>
            <Route path="/" component={IndexPage} exact/>
            <Route path="/services" component={MapPage}/>
            <Route path="/feedback" component={FeedbackPage}/>
          </Switch>
      </GoogleContextProvider>
    </ShortlistContextProvider>
  )
}

export default App
