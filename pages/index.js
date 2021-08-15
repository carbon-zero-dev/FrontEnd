import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import ItemList from '../components/ItemList';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

const App = () => {
	return (
		<>
			<Head>
				<title>Carbon Zero</title>
			</Head>
			<Header />
			<RecoilRoot>
				<ItemList />
			</RecoilRoot>
			<Footer />
		</>
	);
};

export default App;
