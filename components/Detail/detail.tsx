import { IProduct } from '../ProductList';
import React from 'react';
import styled from 'styled-components';

const Contents = styled.div`
	margin: 20px;
	text-align: center;
	margin-top: 200px;

	img {
		max-width: 100%;
		height: 100%;
		max-height: 60vh;
	}
`;

type Props = {
	product?: IProduct;
};

/**
 * 제품 상세 설명
 */
const DetailLayout = ({ product }: Props) => {
	return (
		<>
			<Contents>
				<p>{product.description}</p>
				<img src={product.image_link[0]} alt="제품 상세 이미지" />
				<p>{product.description}</p>
				<img src={product.image_link[0]} alt="제품 상세 이미지" />
				<p>{product.description}</p>
				<img src={product.image_link[0]} alt="제품 상세 이미지" />
			</Contents>
		</>
	);
};

export default DetailLayout;
