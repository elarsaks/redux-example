import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import Router from 'next/router'
import {
  emptyShoppingList,
  setCheapest,
  setFavorite,
  setCustomSelection
} from '../redux/actions'

const CenterMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 10%;
  background-color:  aliceblue;
  height: 100%;
  border-left: 1px solid teal;
  border-right: 1px solid teal;

  .container {
    display: flex;
    height: 3em;
    text-align:center;
    justify-content: center;
    flex-direction: column;
    margin: 1em 2px 1em 2px;

    h2 {
      text-align: center;
    }
  }
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
  text,
}) => {
  return <ButtonContainer
    active={active}
    onClick={() => callBack()}
  >
    {text}
  </ButtonContainer>;
}

interface CenterMenuProps {
  customSelection: boolean
  total: number
}

export const CenterMenu: React.FC<CenterMenuProps> = ({
  customSelection,
  total
}) => {
  const dispatch: any = useDispatch()
  const [activeButton, setActiveButton] = useState('custom')

  useEffect(() => {
    if (customSelection) {
      setActiveButton('custom')
    }
  }, [customSelection])

  return (
    <CenterMenuWrapper >
      <Button
        active={activeButton === 'custom'}
        text={'custom option'}
        callBack={() => {
          setActiveButton('custom')
          dispatch(setCustomSelection(true))
        }} />

      <Button
        active={activeButton === 'cheapest'}
        text={'cheapest option'}
        callBack={() => {
          setActiveButton('cheapest')
          dispatch(setCheapest())
        }} />

      <Button
        active={activeButton === 'favorite'}
        text={'favorite option'}
        callBack={() => {
          setActiveButton('favorite')
          dispatch(setFavorite())
        }} />

      <div className="container">
        <h2>Total: {total}€</h2>
      </div>

      <Button
        active={activeButton === 'confirm'}
        text={'Confirm List'}
        callBack={() => {
          setActiveButton('confirm')
          Router.push('/confirm')
          //  setConfirmDialog(true)
        }} />

      <Button
        active={activeButton === 'empty'}
        text={'Empty List'}
        callBack={() => {
          setActiveButton('empty')
          dispatch(emptyShoppingList())
        }} />

    </CenterMenuWrapper>
  )
}