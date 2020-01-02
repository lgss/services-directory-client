import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { render } from "react-dom"

const rootElement = document.getElementById("root")

render(<Router><App /></Router>, rootElement)