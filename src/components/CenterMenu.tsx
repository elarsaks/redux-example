import styled from 'styled-components'
import * as React from "react"

const CenterMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 10%;
  background-color:  aliceblue;
  height: 100%;
  border-left: 1px solid teal;
  border-right: 1px solid teal;
`

const ButtonContainer = styled.div`
  display: flex;
  height: 3em;
  justify-content: center;
  margin: 1em 2px 1em 2px;
  cursor: pointer;
  background-color: teal;
  border-radius: 0.3em;
  text-transform: uppercase;
  color: white;
`

export const CenterMenu: React.FC = () => {
  
  return (
    <CenterMenuWrapper >
      <ButtonContainer>Test 1</ButtonContainer>
      <ButtonContainer>Test 2</ButtonContainer>
      <ButtonContainer>Test 3</ButtonContainer>
      <ButtonContainer>Test 4</ButtonContainer>
      <ButtonContainer>Test 5</ButtonContainer>
    </CenterMenuWrapper>
  )
}