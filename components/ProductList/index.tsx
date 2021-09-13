// @flow

import * as React from 'react';
import { useState } from 'react';

import { Button, Modal } from '@material-ui/core';
import { productListSelector } from '../../recoil/selectors';
import { useRecoilValue } from 'recoil';

import Link from 'next/link';
import RecommendationItemType from '../../types/recommendationItem';
import { commafy } from '../../utils/numbers';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import defaultImg from '/assets/Zero-done.jpeg'

const colorArr = [
	'#a4fba6',
	'#4ae54a',
	'#30cb00',
	'#6BAF92',
	'#0f9200',
	'#358873',
	'#006203',
];

const ProductContainer = styled.div`
	display: flex;
	padding: 10px;
	flex-wrap: wrap;
	margin-top: 12vh;
`;

const ProductBoxPC = styled.div<{ color: string }>`
	border: 2px solid ${props => props.color};
	background-color: ${props => props.color};
	border-radius: 10px;
	text-align: center;
	padding: 10px;
	margin: 10px;
	width: 100%;
	max-width: 300px;
	height: fit-content;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	h3 {
		margin: 3px 0 13px;
	}

	h4 {
		font-weight: normal;
		margin: 3px 0 13px;
	}

	img {
		max-width: 100%;
		height: 100%;
		max-height: 20vh;
	}
`;

const ProductBoxMobile = styled.div<{ color: string }>`
	border: 2px solid ${props => props.color};
	background-color: ${props => props.color};
	border-radius: 5px;
	text-align: left;
	padding: 10px;
	width: 100%;
	margin: 10px;
	display: flex;
	height: fit-content;
	justify-content: flex-start;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	div {
		min-width: calc(100% - 200px);
	}

	h2 {
		font-size: 12px;
		margin: 2px 0 2px;
	}

	h3 {
		font-size: 10px;
		margin: 2px 0 2px;
	}

	h4 {
		font-size: 8px;
		font-weight: normal;
		margin: 2px 0 2px;
	}

	img {
		width: 100px;
		max-width: 100%;
		height: 100%;
		max-height: 100%;
		margin-right: 10px;
	}
`;

const ModalContainer = styled.div<{ width: number }>`
	width: ${props => (props.width > 450 ? '50vw' : '80vw')};
	height: 60vh;
	background-color: white;
	margin: 20vh auto;
	padding: 20px;
	box-sizing: border-box;
	border: 0;
	border-radius: 8px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	h2 {
		text-align: center;
	}
`;

const RecommendProductItem = styled.div<{ width: number; color: string }>`
	border: 2px solid ${props => props.color};
	background-color: ${props => props.color};
	border-radius: 4px;
	padding: ${props => (props.width > 450 ? '20px' : '10px')};
	margin: 10px;
	box-sizing: border-box;
	width: calc(100% - 20px);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export interface IProduct {
	id: number;
	create_at?: string;
	update_at?: string;
	name: string;
	brand: string;
	price: number;
	description: string;
	image_link: string[];
	category: string;
	is_eco_friendly: boolean;
	carbon_emissions: number;
	recommendations?: RecommendationItemType[];
}

const ProductList = () => {
	const productList =
		useRecoilValue<IProduct[]>(productListSelector);
	const router = useRouter();
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<>
			<ProductContainer>
				{productList && productList.length > 0 && productList.map((product, idx) => {
					if (innerWidth > 450) {
						return (
							<ProductBoxPC
								key={product.id}
								color={colorArr[idx%colorArr.length]}
							>
								<h2>{product.name}</h2>
								<Image src={product.image_link[0] || defaultImg as any} alt="이미지" />
								<h3>{product.category.slice(0, 10)}</h3>
								<h4>{product.description}</h4>
								<h4>
									이 제품은 친환경 제품
									{product.is_eco_friendly ? '입니다.' : '이 아닙니다.'}
								</h4>
								{!product.is_eco_friendly && (
									<Button
										variant="contained"
										style={{ marginBottom: '10px' }}
										onClick={() => setIsOpenModal(true)}
									>
										친환경 제품으로 바꾸기
									</Button>
								)}
								<p>
									<Link
										as={`/detail/${product.id}`}
										href={{
											pathname: '/detail/[id]',
										}}
										passHref
										key={product.id}
									>
										<Button
											variant="contained"
											style={{ marginBottom: '10px' }}
										>
											제품 자세히
										</Button>
									</Link>
								</p>
								<h3>₩{commafy(product.price)}</h3>
							</ProductBoxPC>
						);
					} else {
						return (
							<ProductBoxMobile
								key={product.id}
								onClick={() => setIsOpenModal(true)}
								color={colorArr[idx%colorArr.length]}
							>
								<Image src={product.image_link[0] || defaultImg as any} alt="이미지" />
								<div>
									<h2>{product.name}</h2>
									<h3>{product.category}</h3>
									<h4>{product.description}</h4>
									<h4>
										이 제품은 친환경 제품
										{product.is_eco_friendly ? '입니다.' : '이 아닙니다.'}
									</h4>
									<p>
										<Link
											as={`/detail/${product.id}`}
											href={{
												pathname: '/detail/[id]',
											}}
											passHref
											key={product.id}
										>
											<Button
												variant="contained"
												style={{ marginBottom: '10px' }}
											>
												제품 자세히
											</Button>
										</Link>
									</p>
									<h3>₩{commafy(product.price)}</h3>
								</div>
								{!product.is_eco_friendly && (
									<Button
										variant="contained"
										style={{
											marginBottom: '2px',
											fontSize: '10px',
											padding: '5px',
											width: '50px',
										}}
									>
										친환경 제품
										<br />
										으로 바꾸기
									</Button>
								)}
							</ProductBoxMobile>
						);
					}
				})}
			</ProductContainer>
			<Modal
				open={isOpenModal}
				onClose={() => setIsOpenModal(false)}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<ModalContainer width={innerWidth}>
					<h2>
						이 물품들을 대신
						<br /> 사용해 보는 건 어떠세요?
					</h2>
					<RecommendProductItem
						width={innerWidth}
						color={colorArr[Math.floor(Math.random() * colorArr.length)]}
					>
						<div>아이템 1</div>
						<div>카테고리 1</div>
						<div>가격 1</div>
					</RecommendProductItem>
					<RecommendProductItem
						width={innerWidth}
						color={colorArr[Math.floor(Math.random() * colorArr.length)]}
					>
						<div>아이템 2</div>
						<div>카테고리 2</div>
						<div>가격 2</div>
					</RecommendProductItem>
					<RecommendProductItem
						width={innerWidth}
						color={colorArr[Math.floor(Math.random() * colorArr.length)]}
					>
						<div>아이템 3</div>
						<div>카테고리 3</div>
						<div>가격 3</div>
					</RecommendProductItem>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default ProductList;
