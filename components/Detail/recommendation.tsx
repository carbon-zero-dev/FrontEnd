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
	justify-content: space-evenly;
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
			<ImageContainer>
				{recommendationList && recommendationList?.map((el: RecommendationItemType) => {
					return (
						<Link href={'/'} passHref key={el.id}>
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
