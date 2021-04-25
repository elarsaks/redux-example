import React from 'react';
import styled from 'styled-components'

interface ConfirmDivProps {

}

const ConfirmDiv = styled.div<ConfirmDivProps>`
  
`

const Confirm: React.FC = () => {

  return (
    <ConfirmDiv>
      <h1>Confrim</h1>
    </ConfirmDiv>
  )
}

export default Confirm