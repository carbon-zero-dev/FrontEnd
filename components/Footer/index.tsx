import * as React from 'react';

import styled from 'styled-components';

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 180px;
`;
const GoToSubmit = styled.div`
	background-color: #f2f2f2;
	height: 160px;
	min-width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;
const ScrollToTop = styled.div`
	background-color: #373d3e;
	height: 60px;
	min-width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;
const Btn = styled.a`
	text-decoration: none;
	color: black;
`;
const ScrollBtn = styled.button`
	color: white;

	// button 스타일 지우기
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;

const Footer = () => {
	/**
	 * 맨 위로 이동
	 */
	const scrollToTop = (x, y) => {
		window.scrollTo(x, y);
	};

	return (
		<FooterContainer>
			{/* 맨 위로 이동 */}
			<ScrollToTop>
				<ScrollBtn onClick={() => scrollToTop(0, 0)}>맨 위로</ScrollBtn>
			</ScrollToTop>
		</FooterContainer>
	);
};
export default Footer;
