import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
`;
const githubPath = 'https://github.com/carbon-zero-dev/FrontEnd';

const Footer = () => {
	return (
		<footer>
			<Container>
				<div>
					<a
						href={`https://github.com/vercel/next.js/tree/canary/examples/${githubPath}`}
						className="mx-3 font-bold hover:underline"
						style={{
							color: 'black',
							textDecorationLine: 'none',
						}}
					>
						탄소노노 GitHub
					</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
