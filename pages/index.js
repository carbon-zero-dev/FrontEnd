import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import ItemList from '../components/ItemList';
import Head from 'next/head';

const App = () => {
	return (
		<>
			<Head>
				<title>Carbon Zero</title>
			</Head>
			<RecoilRoot>
				<ItemList />
			</RecoilRoot>
		</>
	);
};

export default App;
