import React from 'react';
import styled from "styled-components";

const ErrorDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30vh;
	text-align: center;
`

const Error: React.FC = () => {
	return (
		<ErrorDiv>
      <h1 style={{ "color": '#a32424' }}>
        Oops something went wrong, please contact system administrator!
      </h1>
		</ErrorDiv>
  )
}

export default Error