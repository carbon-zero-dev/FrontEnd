import * as React from 'react';
import styled from 'styled-components';
import SearchBar from '../searchbar';

const Title = styled.h1``;
const HeaderContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Header = () => {
	return (
		<>
			<HeaderContainer className="Header">
				<Title>탄소 노노 ✋✋</Title>
				<SearchBar />
			</HeaderContainer>
		</>
	);
};

export default Header;
