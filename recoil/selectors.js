import { itemListState } from "./atoms"
import { selector } from "recoil"

export const itemListSumState = selector({
	key: "itemSum",
	get: ({ get }) => {
		const itemList = get(itemListState)
		const size = itemList.length;
		return size;
	},
})
