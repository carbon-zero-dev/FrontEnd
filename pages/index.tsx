import React from 'react';
import dynamic from 'next/dynamic';

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
	return (
		<>
			<HeaderWithNoSSR />
			<ProductListWithNoSSR />
			<FooterWithNoSSR />
		</>
	);
};
export default App;
