import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
`;
const GithubLink = styled.a`
	color: black;
	text-decoration: none;
`;
const githubPath = 'https://github.com/carbon-zero-dev/FrontEnd';

const Footer = () => {
	return (
		<footer>
			<Container>
				<div>
					<GithubLink
						href={`https://github.com/carbon-zero-dev/FrontEnd`}
						className="mx-3 font-bold hover:underline"
					>
						탄소노노 GitHub
					</GithubLink>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
