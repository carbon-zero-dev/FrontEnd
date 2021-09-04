// @flow

import * as React from 'react';

import Image from 'next/image';
import logo from '../../public/logo.png';
import styled from 'styled-components';

// theme color: 3C9D46 8DC3A7
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 180px;
`;

const NavigationBar = styled.div`
	background-color: #373d3e;
	display: flex;
	justify-content: left;
	padding: 20px;
	padding-left: 100px;

	// sticky
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1000;
`;
const NavBtn = styled.a`
	color: white;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	margin-left: 60px;
	cursor: pointer;
	text-decoration: none;
`;
const Header = () => {
	return (
		<HeaderContainer>
			{/* 네비게이션 바 */}
			<NavigationBar class="">
				<Image src={logo} alt="로고" />
				<NavBtn href="/"> HOME </NavBtn>
				<NavBtn href="/"> SHOP </NavBtn>
				<NavBtn href="/"> INFO </NavBtn>
			</NavigationBar>
		</HeaderContainer>
	);
};
export default Header;
