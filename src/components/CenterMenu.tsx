import styled from 'styled-components'
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import {
  emptyShoppingList,
  setTheCheapest,
  setMostFavorite
} from '../store/actions'


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

interface ButtonContainerProps {
  active: boolean
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  height: 3em;
  text-align:center;
  justify-content: center;
  flex-direction: column;
  margin: 1em 2px 1em 2px;
  cursor: pointer;
  background-color: ${(p) => p.active ? '#13c4d1' : 'teal'}; 
  border-radius: 0.3em;
  text-transform: uppercase;
  color: white;
  width: 100%auto;
  padding: 1em;

  :hover{
      background-color: #13c4d1;
    }
`

interface ButtonProps {
  active: boolean
  callBack: any
  text: string
}

const Button: React.FC<ButtonProps> = ({
  active,
  callBack,
  text
}) => {
  return <ButtonContainer
    active={active}
    onClick={() => callBack()}
    >
      {text}
    </ButtonContainer>;
}

export const CenterMenu: React.FC = () => {
  const dispatch: any = useDispatch()
  const [activeButton, setActiveButton] = useState('test')
  
  return (
    <CenterMenuWrapper >
      <Button
        active={activeButton === 'custom'}
        text={'Hand pick products'}
        callBack={() => {
          setActiveButton('custom')
          console.log('CREATE CUSTOM SELECTION')
        }} />
      
      <Button
        active={activeButton === 'cheapest'}
        text={'Get cheapest option'}
        callBack={() => {
          setActiveButton('cheapest')
          dispatch(setTheCheapest)
        }} />
      
      <Button
        active={activeButton === 'favorite'}
        text={'Get favorite option'}
        callBack={() => {
          setActiveButton('favorite')
          dispatch(setMostFavorite)
        }} />
      
      <br></br>
      
      <Button
        active={activeButton === 'empty'}
        text={'Empty Shopping List'}
        callBack={() => {
          setActiveButton('empty')
          dispatch(emptyShoppingList)
        }} />
      
      <Button
        active={activeButton === 'confirm'}
        text={'Confirm Shopping List'}
        callBack={() => {
          setActiveButton('confirm')
          console.log('CREATE CONFIRMATION!')
        }} />
    </CenterMenuWrapper>
  )
}