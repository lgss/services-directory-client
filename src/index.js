import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import App from "./App"
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement)
} else {
    render(<App />, rootElement)
}