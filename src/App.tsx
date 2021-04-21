import * as React from "react"
import "./App.scss"

import { CenterMenu } from "./components/CenterMenu"
import { Left } from "./components/Left"
import { Right } from "./components/Right"

const App: React.FC = () => {

  return (
    <main>
    <div id="header">
      <h1>
      Droppe Xmas
      </h1>
    </div>
  <div id="content-container">
      <Left />
      <CenterMenu />
      <Right />
    </div>
</main>
  )
}

export default App