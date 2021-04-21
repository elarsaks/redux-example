import * as React from "react"
import "./App.scss"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"


import { CenterMenu } from "./components/CenterMenu"
import { Left } from "./components/Left"
import { Right } from "./components/Right"
import { setInitialState } from "./store/actions"

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  dispatch(setInitialState())

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