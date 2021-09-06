import React from 'react';
import dynamic from 'next/dynamic';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productsListState } from '../recoil/atoms';
import { baseUrl, fetcher } from '../utils/useRequest';
import useSWR from 'swr';
import { productListSelector } from '../recoil/selectors';

// eslint-disable-next-line no-undef
export const HeaderWithNoSSR = dynamic(() => import('../components/Header'), {
	ssr: false,
});
export const ProductListWithNoSSR = dynamic(
	() => import('../components/ProductList'),
	{
		ssr: false,
	},
);
export const FooterWithNoSSR = dynamic(() => import('../components/Footer'), {
	ssr: false,
});

const App = () => {
	const [products, _] = useRecoilState(productListSelector);


	return (
		<>
			<HeaderWithNoSSR />
			<ProductListWithNoSSR products={products} />
			<FooterWithNoSSR />
		</>
	);
};
export default App;
