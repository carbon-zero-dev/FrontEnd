import React from 'react';
import { atom, RecoilRoot } from 'recoil';
import ItemList from '../components/ItemList';

const App = () => {
	return (
		<RecoilRoot>
			<p>recoil</p>
			<ItemList />
		</RecoilRoot>
	);

};

export default App;
