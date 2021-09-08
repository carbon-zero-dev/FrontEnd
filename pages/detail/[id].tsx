import React from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';

export const HeaderWithNoSSR = dynamic(
	() => import('../../components/Header'),
	{
		ssr: false,
	},
);
export const LayoutWithNoSSR = dynamic(
	() => import('../../components/Detail'),
	{
		ssr: false,
	},
);

/**
 * 상품 상세 페이지
 */

function Detail({ testProduct }) {
	return (
		<div>
			<HeaderWithNoSSR />
			<LayoutWithNoSSR testProduct={testProduct} />
		</div>
	);
}

export default Detail;
