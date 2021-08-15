import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bannerImage from '../public/pic1.jpg';

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ItemList = () => {
	return (
		<Wrapper>
			<Image src={bannerImage} alt="banner image" width={1200} height={180} />
		</Wrapper>
	);
};

export default ItemList;
