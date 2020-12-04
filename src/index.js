import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Clock from "./Clock/Clock"
import { OnFocus, OnBlur, CurrentTarget } from "./Examples/Examples"
import Toggle from "./Toggle/Toggle"

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <Clock />
      <OnFocus />
      <OnBlur />
      <CurrentTarget />
      <Toggle />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)