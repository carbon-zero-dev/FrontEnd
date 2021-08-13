// @flow
import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { itemListState } from '../../recoil/atoms';
import { itemListSumState } from '../../recoil/selectors';
import { Button } from '@material-ui/core';
import styled from 'styled-components';


const ItemContainer = styled.div`
	display: flex;
	padding: 10px;
`;

const ItemBox = styled.div`
	border: 1px solid red;
	padding: 10px;
	margin: 10px;
`;


const ItemList = () => {

	const itemList = useRecoilValue(itemListState);
	const setItemList = useSetRecoilState(itemListState);
	const sum = useRecoilValue(itemListSumState);

	return (
		<div>
			<ItemContainer>
			{itemList.map(item => {
				return (
					<ItemBox>
						<p>{item.id}</p>
						<p>{item.name}</p>
						<p>{item.category}</p>
						<Button variant="contained">버튼</Button>
					</ItemBox>
				);
			})}
			</ItemContainer>
			<p>sum : {sum}</p>
		</div>
	);
};

export default ItemList;
