import * as React from 'react';
import styled from 'styled-components';
import SearchBar from '../searchbar';

const Title = styled.h1``;

const Header = () => {
	return (
		<>
			<div
				className="Header"
				style={{
					height: 300,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Title>탄소 노노 ✋✋</Title>
				<SearchBar />
			</div>
		</>
	);
};

export default Header;
