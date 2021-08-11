import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import ItemList from '../components/ItemList';
import Head from 'next/head';

const App = () => {
	return (
		<>
			<Head>
				<title>Carbon Zero</title>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Head>
		<RecoilRoot>
			<ItemList />
		</RecoilRoot>
		</>
	);

};

export default App;
