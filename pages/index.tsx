import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import ProductList from '../components/ProductList';
import Head from 'next/head';
import Header from '../components/Header';
import { useGetProducts } from '../utils/useRequest';

const App = () => {
	const { products, error } = useGetProducts("/products")

	if (error) return <h1>Something went wrong!</h1>
	if (!products) return <h1>Loading...</h1>

		return (
			<>
				<Head>
					<title>Carbon Zero</title>
				</Head>
				<RecoilRoot>
					<Header />
					<ProductList products={products}/>
				</RecoilRoot>
			</>
		);
	}
;

export default App;
