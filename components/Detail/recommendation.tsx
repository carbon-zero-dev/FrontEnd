import { IProduct } from '../ProductList';
import Link from 'next/link';
import React from 'react';
import RecommendationElement from './recommendationElement';
import RecommendationItemType from '../../types/recommendationItem';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { recommendedProductListSelector } from '../../recoil/selectors';

const Contents = styled.div`
	display: flex;
	padding: 40px;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: rgba(164, 251, 166, 0.7);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const ImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	max-width: 60%;
	min-width: 60%;
	justify-content: left;
`;
const LinkContainer = styled.a`
	text-decoration: none;
	color: black;
	
	:hover {
		cursor: pointer;
	}
`;

type Props = {
	product: IProduct;
};

/**
 * 추천 상품
 */
const Recommendation = ({ product }: Props) => {
	const recommendationList = useRecoilValue(recommendedProductListSelector(product.id));

	return (
		<Contents>
			{/* 추천 상품 나열 */}
			<h2>이러한 제품들을 사용해 보는 건 어떠세요?</h2>
			<ImageContainer>
				{recommendationList && recommendationList?.map((el: RecommendationItemType) => {
					return (
						<Link href={`/detail/${el.id}`} passHref key={el.id}>
							<LinkContainer>
								<RecommendationElement props={el} />
							</LinkContainer>
						</Link>
					);
				})}
			</ImageContainer>
		</Contents>
	);
};

export default Recommendation;
