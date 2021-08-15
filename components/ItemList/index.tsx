import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { itemListState } from '../../recoil/atoms';
import { itemListSumState } from '../../recoil/selectors';
import styled from 'styled-components';
import Image from 'next/image';
import productImage from '../../public/pic1.jpg';
import Banner from '../banner';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ItemContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: row;
	padding: 10px;
`;

const ItemBox = styled.div`
	padding: 10px;
	margin: 10px;
	width: 340px;
	cursor: pointer;
`;

const ItemList = ({ href }) => {
	const itemList = useRecoilValue(itemListState);
	const setItemList = useSetRecoilState(itemListState);
	const sum = useRecoilValue(itemListSumState);
	const router = useRouter();

	return (
		<>
			<div>
				<Banner />
			</div>
			<div>
				<ItemContainer>
					{itemList.map(item => {
						return (
							<ItemBox key={item.id}>
								<Link href={`/detailed/${item.id}`} passHref>
									<a
										style={{
											textDecorationLine: 'none',
											color: 'black',
										}}
									>
										<Image
											src={productImage}
											alt="image of item"
											width={200}
											height={200}
										/>
										<p>{item.name}</p>
										<p>{item.category}</p>
										<p>
											{item.description.length > 80
												? item.description.slice(0, 80) + '...'
												: item.description}
										</p>
									</a>
								</Link>
							</ItemBox>
						);
					})}
				</ItemContainer>
			</div>
		</>
	);
};

export default ItemList;
