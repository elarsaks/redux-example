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
  text-align:center;
  justify-content: center;
  flex-direction: column;
  margin: 1em 2px 1em 2px;
  cursor: pointer;
  background-color: teal;
  border-radius: 0.3em;
  text-transform: uppercase;
  color: white;
  width: 100%auto;
  padding: 1em;

  :hover{
      background-color: #13c4d1;
    }
`

export const CenterMenu: React.FC = () => {
  
  return (
    <CenterMenuWrapper >
      <ButtonContainer> Cheapest Option </ButtonContainer>
      <ButtonContainer> Most Favorite Option </ButtonContainer>
      <ButtonContainer> Hand Pick Products </ButtonContainer>
      <ButtonContainer> Confirm Purchase </ButtonContainer>
      <ButtonContainer> Empty Card </ButtonContainer>
    </CenterMenuWrapper>
  )
}