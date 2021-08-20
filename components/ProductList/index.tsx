// @flow
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { productListState } from '../../recoil/atoms';
import { productListSumState } from '../../recoil/selectors';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { commafy } from '../../utils/numbers';
import { useRouter } from 'next/router';

const ProductContainer = styled.div`
	display: flex;
	padding: 10px;
`;

const ProductBox = styled.div`
	border: 2px solid blue;
	border-radius: 5px;
	text-align: center;
	padding: 10px;
	margin: 10px;
	width: 25%;
	min-width: 200px;
	height: fit-content;
	
	h3 {
		margin: 3px 0 3px;
	}
	
	h4 {
		font-weight: normal;
		margin: 3px 0 3px;
	}
	
	img {
		max-width: 100%;
		height: 100%;
		max-height: 20vh;
	}
`;

export interface IProduct {
	id: number;
	create_at?: string;
	update_at?: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	image_link: string[];
	category: string;
	is_eco_friendly: boolean;
	carbon_emissions: number;
}

const ProductList = () => {
	const productList = useRecoilValue(productListState);
	// const setItemList = useSetRecoilState(productListState);
	const sum = useRecoilValue(productListSumState);
	const router = useRouter();

	return (
		<div>
			<ProductContainer>
				{productList.map(product => {
					return (
						<ProductBox key={product.id}>
							<h2>{product.name}</h2>
							<img src={product.image_link[0]} alt='이미지' />
							<h3>{product.category}</h3>
							<h4>{product.description}</h4>
							<h4>이 제품은 친환경 제품{product.is_eco_friendly ? '입니다.' :'이 아닙니다.'}</h4>
							{!product.is_eco_friendly && <Button variant="contained">친환경 제품으로 바꾸기</Button> }
							<h3>₩{commafy(product.price)}</h3>
						</ProductBox>
					);
				})}
			</ProductContainer>
			<p>sum : {sum}</p>
			<Button variant="contained" onClick={() => router.push('/submit')}>새로운 프로덕트 등록하기</Button>
		</div>
	);
};

export default ProductList;
