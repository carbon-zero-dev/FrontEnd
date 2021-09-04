import * as React from 'react';

import styled from 'styled-components';

const FooterContainer = styled.div``;
const SellProduct = styled.div`
	width: 100%;
	height: 220px;
	background-color: #f2f2f2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const BackToTop = styled.div`
	width: 100%;
	height: 80px;
	background-color: #37475a;
	color: white;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GoToSellProduct = styled.a`
	font-size: 20px;
	cursor: pointer;
	text-decoration: none;
	color: black;
`;

const ScrollUpBtn = styled.button`
	color: white;
	font-size: 20px;
	cursor: pointer;

	// style 없는 btn
	background: transparent;
	box-shadow: 0px 0px 0px transparent;
	border: 0px solid transparent;
	text-shadow: 0px 0px 0px transparent;
`;

const Header = () => {
	const scrollUp = () => {
		window.scrollTo(0, 0);
	};

	return (
		<FooterContainer>
			{/* 상품판매 */}
			<SellProduct>
				<h2>물건 판매하기</h2>
				<GoToSellProduct href="/submit">CLICK</GoToSellProduct>
			</SellProduct>
			{/* 맨 위로 */}
			<BackToTop>
				<ScrollUpBtn onClick={scrollUp}>맨 위로</ScrollUpBtn>
			</BackToTop>
		</FooterContainer>
	);
};

export default Header;
