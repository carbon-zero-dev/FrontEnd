import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Section = styled.div`
	display: flex;
	justify-content: center;
	align-item: center;
	padding: 50px;
`;

const First = () => (
	<Wrapper>
		<Section>
			<h1>This is Second Page</h1>
		</Section>
		<Section>
			<ul>
				<li>
					<Link href="/">
						<a>Back to Home</a>
					</Link>
				</li>
				<li>
					<Link href="/modules/first">
						<a>Page One</a>
					</Link>
				</li>
			</ul>
		</Section>
	</Wrapper>
);

export default First;
