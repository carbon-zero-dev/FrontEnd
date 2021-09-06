import { productsListState } from './atoms';
import { selector } from 'recoil';
import { IProduct } from '../components/ProductList';
import useSWR from 'swr';
import { baseUrl, fetcher } from '../utils/useRequest';

export const productListSelector = selector<IProduct[]>({
	key: "get/products",
	get: ({ get }) => {
		// eslint-disable-next-line no-useless-catch
		try {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const { data } = useSWR(`${baseUrl}/products/?page=${0}&size=${10}`, fetcher);
			return data?._embedded?.product_response_data_list || [];
		} catch (e) {
			throw e;
		}
	},
	set: ({set}, newValue) => set(productsListState, newValue)
})

export const productListSumSelector = selector({
	key: "productListSumSelector",
	get: ({ get }) => {
		const itemList = get(productsListState)
		return itemList.length;
	}
});
