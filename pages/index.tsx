import { RecoilRoot, useRecoilValue } from 'recoil';

import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { productsListState } from '../recoil/atoms';

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
export const FooterWithNoSSR = dynamic(() => import('../components/Header'), {
	ssr: false,
});

const App = () => {
	// const { products, error } = useGetProducts("/products", {page: 0, size: 10})
	//
	// if (error) return <h1>Something went wrong!</h1>
	// if (!products) return <h1>Loading...</h1>

	// dummy data
	const products = useRecoilValue(productsListState);

	return (
		<>
			<HeaderWithNoSSR />
			<ProductListWithNoSSR products={products} />
			<FooterWithNoSSR />
		</>
	);
};
export default App;
