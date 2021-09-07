import { categoryListState, productsListState } from './atoms';
import { selector, selectorFamily } from 'recoil';
import { IProduct } from '../components/ProductList';
import useSWR from 'swr';
import { baseUrl, fetcher } from '../utils/useRequest';
import ICategory from '../types/category';

export const productListSelector = selector<IProduct[]>({
	key: "get/product",
	get: async () => {
		// eslint-disable-next-line no-useless-catch
		try {
			const res = await fetch(`${baseUrl}/products/?page=${0}&size=${10}`);
			const data = await res.json();

			console.log(data);

			return data?._embedded?.product_response_data_list || [];
		} catch (e) {
			throw e;
		}
	},
	set: ({set}, newValue) => set(productsListState, newValue)
})

export const categoryListSelector = selector<ICategory[]>({
	key: "get/categories",
	get: async ({ get }) => {
		// eslint-disable-next-line no-useless-catch
		try {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const res = await fetch(`${baseUrl}/products/categories`);
			const data = await res.json();
			return data || [];
		} catch (e) {
			throw e;
		}
	},
	set: ({set}, newValue) => set(categoryListState, newValue)
})

export const productDetailSelector = selectorFamily({
	key: 'productDetailSelector',
	get: (id) => async () => {{
		// eslint-disable-next-line no-useless-catch
		try {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const res = await fetch(`${baseUrl}/products/${String(id)}`);
			const data = await res.json();
			return data || null;
		} catch (e) {
			throw e;
		}
	}}
})

export const recommendedProductListSelector = selectorFamily({
	key: 'recommendedProductListSelector',
	get: (id) => async () => {{
		// eslint-disable-next-line no-useless-catch
		try {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const res = await fetch(`${baseUrl}/products/recommend/${String(id)}`);
			const data = await res.json();
			return data || [];
		} catch (e) {
			throw e;
		}
	}}
})
