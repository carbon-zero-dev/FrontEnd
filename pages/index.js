import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import ProductList from '../components/ProductList';
import Head from 'next/head';
import Header from '../components/Header';

const App = () => {
	return (
		<>
			<Head>
				<title>Carbon Zero</title>
			</Head>
			<RecoilRoot>
				<Header />
				<ProductList />
			</RecoilRoot>
		</>
	);
};

export default App;
