import { productsListState } from './atoms';
import { selector } from 'recoil';
import { IProduct } from '../components/ProductList';
import { UseGetProducts } from '../utils/useRequest';

export const productListSelector = selector<IProduct[]>({
	key: "productListSelector",
	get: ({ get }) => {
		return get(productsListState);
	},
	set: ({set}, newValue) => set(productsListState, newValue)
})

export const productListSumSelector = selector({
	key: "productListSumSelector",
	get: ({ get }) => {
		const itemList = get(productsListState)
		return itemList.length;
	}
})

export const fetchProductListSelector = selector({
	key: "FetchProductListSelector",
	get: async ({get}) => {
			const arr = get(productsListState);
			console.log(arr);
			const { products, error } = UseGetProducts("/products", {page: 0, size: 10});
			console.log(products);
			return { products, error };
	},
})
