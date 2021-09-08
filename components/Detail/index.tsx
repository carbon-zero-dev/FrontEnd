import Certificate from './certificate';
import Detail from './detail';
import Display from './display';
import { IProduct } from '../ProductList';
import React from 'react';
import Recommendation from './recommendation';
import { productDetailSelector } from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

type Props = {
	product?: IProduct;
};

/**
 * 상세 페이지의 Layout
 * Display: 상품의 이미지와 구매와 관련된 설명
 * Recommendation: 추천 상품 목록
 * Certificate: 친환경 상품일 경우 친환경 인증 마크에 대한 설명
 * Detail: 제품의 상세 설명
 */
const DetailLayout = ({ testProduct }: Props) => {
	const router = useRouter();

	const product = router
		? useRecoilValue(productDetailSelector(router.query.id))
		: testProduct;

	return (
		<>
			<div className="layout_container">
				<Display product={product} />
				<Recommendation product={product} />
				<Certificate product={product} />
				<Detail product={product} />
			</div>
		</>
	);
};

export default DetailLayout;
