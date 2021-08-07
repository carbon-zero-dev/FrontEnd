import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import nextIcon from '../assets/nextjs.png';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Section = styled.div`
	display: flex;
	justify-content: center;
	align-item: center;
	padding: 50px;
`;
const Container = styled.div`
	width: 240px;
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px lightgray solid;
	border-radius: 20px;
`;
const LinkWrapper = styled.a`
	color: black;
	text-decoration: none;
`;
const IconDivStyle = styled.div`
	display: flex;
	justify-content: center;
	align-item: center;
	padding: 50px;
`;
const Text = styled.p`
	font-size: 16px;
`;

const App = () => (
	<Wrapper>
		{/* NextJS Icon */}
		<IconDivStyle>
			<Image src={nextIcon} alt="NextJS icon" width={200} height={200} />
		</IconDivStyle>

		<Section className="routeContainer">
			<h3>Try Basic Routing</h3>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/modules/first">
						<a>First Page</a>
					</Link>
				</li>
				<li>
					<Link href="/modules/second">
						<a>Second Page</a>
					</Link>
				</li>
			</ul>
		</Section>

		<Section className="linkContainer">
			<LinkWrapper href="https://nextjs.org/" target="_blank">
				<Container>
					<Text>GO TO NextJS</Text>
				</Container>
			</LinkWrapper>
		</Section>
	</Wrapper>
);

export default App;
