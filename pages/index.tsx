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
	// const { products, error } = useRecoilValue(fetchProductListSelector);
	//
	// if (error) return <h1>Something went wrong!</h1>
	// if (!products) return <h1>Loading...</h1>

	const products = [];
	return (
		<>
			<HeaderWithNoSSR />
			<ProductListWithNoSSR products={products} />
			<FooterWithNoSSR />
		</>
	);
};
export default App;
