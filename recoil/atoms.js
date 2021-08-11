import { atom } from 'recoil';

export const itemListState = atom({
	key: 'todoListState',
	default: [{
		id: 1,
		name: '테스트',
		category: '카테고리',
	},
		{
			id: 2,
			name: '테스트2',
			category: '카테고리2',
		}],
});
