/**
 * @jest-environment jsdom
 */

import Enzyme, { mount } from 'enzyme';
import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductList from '../../components/ProductList';
import { RecoilRoot } from 'recoil';

Enzyme.configure({ adapter: new Adapter() });

describe('ProductList 테스트', () => {
	let wrapper = '';
	beforeEach(() => {
		wrapper = mount(
			<RecoilRoot>
				<Suspense fallback={<div>Loading... </div>}>
					<ProductList />
				</Suspense>
			</RecoilRoot>,
		);
	});

	it('ProductList 랜더링 테스트', () => {
		expect(wrapper).not.toBeNull();
	});

	it('productList가 undefined/null 인 경우', () => {});

	it('productList==0 인 경우', () => {});
});

describe('innerWidth>450', () => {
	let wrapper = '';
	beforeEach(() => {
		wrapper = mount(
			<RecoilRoot>
				<Suspense fallback={<div>Loading... </div>}>
					<ProductList />
				</Suspense>
			</RecoilRoot>,
		);
	});
	it('(1) 친환경 제품 스냅샷', () => {});

	it('(2) 일반 제품 스냅샷', () => {});

	it('(3) 친환경 제품으로 바꾸기 모달 테스트', () => {});

	it('(4) 제품 자세히 라우팅 테스트', () => {});

	it('(5) 모달 테스트', () => {});
});

describe('innerWidth<=450', () => {
	let wrapper = '';
	beforeEach(() => {
		wrapper = mount(
			<RecoilRoot>
				<Suspense fallback={<div>Loading... </div>}>
					<ProductList />
				</Suspense>
			</RecoilRoot>,
		);
	});
	it('(1) 친환경 제품 스냅샷', () => {});

	it('(2) 일반 제품 스냅샷', () => {});

	it('(3) 친환경 제품으로 바꾸기 모달 테스트', () => {});

	it('(4) 제품 자세히 라우팅 테스트', () => {});

	it('(5) 모달 테스트', () => {});
});
