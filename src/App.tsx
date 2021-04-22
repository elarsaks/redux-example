import React, { useEffect } from 'react';
import "./App.scss"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"


import { CenterMenu } from "./components/CenterMenu"
import { Left } from "./components/Left"
import { Right } from "./components/Right"
import { setInitialState } from "./store/actions"

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(setInitialState())
  }, [])

  const error: any = useSelector(
    (state: any) => state.error,
  )

  const status: string = useSelector(
    (state: any) => state.status,
  )
  

  return (
    <main>
    <div id="header">
      <h1>
          Droppe X-mas
      </h1>
    </div>
      {status === 'loading'
        ? <h1 id="loading-header">Loading ...</h1>
        : <div id="content-container">
            <Left />
            <CenterMenu />
            <Right />
          </div>
      }
      
</main>
  )
}

export default App