// @flow
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { itemListState } from '../../recoil/atoms';
import { itemListSumState } from '../../recoil/selectors';

const ItemList = () => {
	const itemList = useRecoilValue(itemListState);
	const setItemList = useSetRecoilState(itemListState);
	const sum = useRecoilValue(itemListSumState);

	return (
		<div>
			<p>ItemList</p>
			{itemList.map(item => {
				return (
					<>
						<p>{item.id}</p>
						<p>{item.name}</p>
						<p>{item.category}</p>
					</>
				);
			})}
			<p>sum : {sum}</p>
		</div>
	);
};

export default ItemList;
