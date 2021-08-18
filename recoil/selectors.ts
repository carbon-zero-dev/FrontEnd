import { productListState } from "./atoms"
import { selector } from "recoil"

export const productListSumState = selector({
	key: "itemSum",
	get: ({ get }) => {
		const itemList = get(productListState)
		const size = itemList.length;
		return size;
	},
})
