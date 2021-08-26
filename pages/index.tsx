import React from 'react';
import { RecoilRoot } from 'recoil';
import ProductList from '../components/ProductList';
import Head from 'next/head';
import Header from '../components/Header';
import { useGetProducts } from '../utils/useRequest';
import dynamic from 'next/dynamic';

// eslint-disable-next-line no-undef
export const HeaderWithNoSSR = dynamic(() => import('../components/Header'), {
	ssr: false,
});
export const ProductListWithNoSSR = dynamic(() => import('../components/ProductList'), {
	ssr: false,
});

const App = () => {
	const { products, error } = useGetProducts("/products", {page: 0, size: 10})

	if (error) return <h1>Something went wrong!</h1>
	if (!products) return <h1>Loading...</h1>

	// 임시 - API 동작 안 할 때 dummy data
	// const products = useRecoilValue(productsListState);

		return (
			<>
				<Head>
					<title>Carbon Zero</title>
				</Head>
				<RecoilRoot>
					<HeaderWithNoSSR />
					<ProductListWithNoSSR products={products}/>
				</RecoilRoot>
			</>
		);
	}
;

export default App;
