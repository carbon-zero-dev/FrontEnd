// @flow
import * as React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: greenyellow;
  color: black;
	padding: 20px;
	text-align: center;
	
	h1 {
		margin: 0 0 10px;
	}
	
	h2 {
		margin: 0
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<h1>탄소노노</h1>
			<h2>여러분의 선택으로 지구를 살릴 수 있습니다.</h2>
		</HeaderContainer>
	);
};

export default Header;