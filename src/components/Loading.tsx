import React from 'react';
import styled, { keyframes } from "styled-components";

const LoadingDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30vh;
	text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 3px solid #51c8f7;
  border-right: 3px solid #51c8f7;
  border-bottom: 3px solid #51c8f7;
  border-left: 5px solid teal;
  background: transparent;
  width: 10em;
  height: 10em;
  border-radius: 50%;
`;
const Loading: React.FC = () => {
	return (
		<LoadingDiv>
			<Spinner />
		</LoadingDiv>
  )
}

export default Loading