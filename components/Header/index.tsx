// @flow

import * as React from 'react';

import Image from 'next/image';
import logo from '../../public/logo.png';
import styled from 'styled-components';
import { useRouter } from 'next/router';

// theme color: 3C9D46 8DC3A7
const HeaderContainer = styled.div`
	display: flex;
	margin-bottom: 180px;
  background-color: #a4fba6;
	color: #0f9200;
	padding: 10px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	justify-content: space-between;

  // sticky
  position: fixed;
  width: 100%;
	max-height: 8vh;
  top: 0;
  left: 0;
  z-index: 1000;
	
	h1 {
		font-size: 32px;
		font-weight: 700;
		margin: 0;
		line-height: 8vh;
	}

  h1:hover, h2:hover {
    cursor: pointer;
  }
	
	h2 {
    font-size: 24px;
    font-weight: 700;
		margin: 0 40px 0 0;
    line-height: 8vh;
	}
	
`;

const Header = () => {
	const router = useRouter();

	return (
		<HeaderContainer>
			<h1 onClick={() => router.push('/')}>탄소노노 {innerWidth > 450 && <span style={{color: '#006203', fontWeight: 600}}>Carbon Zero</span>}</h1>
			<h2 onClick={() => router.push('/submit')}>제품 등록하기</h2>
		</HeaderContainer>
	);
};
export default Header;
