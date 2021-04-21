import styled from 'styled-components'
import * as React from "react"

const CenterMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 10%;
  background-color: cadetblue;
  height: 100%;
`

export const CenterMenu: React.FC = () => {
  
  return (
    <CenterMenuWrapper >
      <button>Test 1</button>
      <button>Test 2</button>
      <button>Test 3</button>
      <button>Test 4</button>
      <button>Test 5</button>
    </CenterMenuWrapper>
  )
}