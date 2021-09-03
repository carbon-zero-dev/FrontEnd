// @flow

import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import styled from 'styled-components';

// theme color: 3C9D46 8DC3A7
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const NavigationBar = styled.div`
	background-color: #373d3e;
	display: flex;
	justify-content: left;
	padding: 20px;
	padding-left: 100px;
`;
const Banner = styled.div`
	height: 230px;
	background-color: #3c9d46;
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
			<NavigationBar>
				<Image src={logo} alt="로고" />
				<NavBtn href="/"> HOME </NavBtn>
				<NavBtn href="/"> SHOP </NavBtn>
				<NavBtn href="/"> INFO </NavBtn>
			</NavigationBar>
			{/* 배너 */}
			{/* <Banner></Banner> */}
		</HeaderContainer>
	);
};

export default Header;
