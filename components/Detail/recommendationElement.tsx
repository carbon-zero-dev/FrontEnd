import React from 'react';
import RecommendationItemType from '../../types/recommendationItem';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Contents = styled.div`
	margin: 20px;
	text-align: center;

	img {
		max-width: 150px;
		height: 150px;
		margin-right: 10px;
		margin-left: 10px;
	}
`;

type Props = {
	props: RecommendationItemType;
};

/**
 * 추천 상품 요소
 */
const RecommendationElemnet = ({ props }: Props) => {
	const router = useRouter();

	return (
		<Contents onClick={() => router.push(`/detail/${props.id}`)}>
			<img src={props.image_link && props.image_link[0]} alt="추천 상품 이미지" />
			<p>
				{props && props.name && props.name.length > 8 ? `${props.name.slice(0, 8)}...` : props.name}
			</p>
			<p>{props.price} 원</p>
		</Contents>
	);
};

export default RecommendationElemnet;
