/**
 * @jest-environment jsdom
 */

import Enzyme, { mount } from 'enzyme';
import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductSubmit from '../../components/ProductSubmit';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('ProductSubmit 테스트', () => {
	let wrapper = '';
	beforeEach(() => {
		wrapper = mount(
			<RecoilRoot>
				<Suspense fallback={<div>Loading... </div>}>
					<ProductSubmit />
				</Suspense>
			</RecoilRoot>,
		);
	});

	it('ProductSubmit 랜더링 테스트', () => {
		expect(wrapper).not.toBeNull();
	});

	it('productValidationCheck 비동기 함수 테스트', () => {});

	it('submit value 기본값(default text) 테스트', () => {
		expect(wrapper.find('input#standard-basic-name').text()).toEqual('');
		expect(wrapper.find('input#standard-basic-brand').text()).toEqual('');
		expect(wrapper.find('input#standard-basic-category').text()).toEqual('');
		expect(wrapper.find('input#standard-basic-description').text()).toEqual('');
		expect(wrapper.find('input#standard-basic-price').text()).toEqual('');
		expect(wrapper.find('input#standard-basic-carbon_emission').text()).toEqual(
			'',
		);
		expect(wrapper.find('input#standard-basic-is_eco_friendly').text()).toEqual(
			'',
		);
	});

	it('validationCheck 함수 테스트 ', () => {});
});

describe('handleChange : 값 입력 테스트', () => {
	const handleChange = jest.fn();
	let wrapper = '';
	let testFormValue = {};

	beforeAll(() => {
		wrapper = mount(
			<RecoilRoot>
				<Suspense fallback={<div>Loading... </div>}>
					<ProductSubmit handleChange={handleChange} />
				</Suspense>
			</RecoilRoot>,
		);
	});

	it('Name 입력', () => {
		const name = 'name';
		const input = wrapper.find('input#standard-basic-name');
		act(() => {
			input.simulate('focus');
			input.props().value = '제주삼다수';
			input.simulate('blur');
		});
		wrapper.update();
		handleChange(name);
		expect(input.props().value).toEqual('제주삼다수');
	});

	it('Brand 입력', () => {
		const name = 'brand';
		const input = wrapper.find('input#standard-basic-brand');
		act(() => {
			input.simulate('focus');
			input.props().value = '농심';
			input.simulate('blur');
		});
		wrapper.update();
		handleChange(name);
		expect(input.props().value).toEqual('농심');
	});

	it('Category 입력', () => {
		const name = 'category';
		const selectBox = wrapper.find('.select-category');
		act(() => {
			selectBox.simulate('click');
			wrapper.find('#menu1').simulate('click');
		});
		wrapper.update();
		expect(selectBox.props().value).toEqual('식품 > 생수/음료');
	});

	it('Description 입력', () => {
		const name = 'description';
		const input = wrapper.find('input#standard-basic-description');
		act(() => {
			input.simulate('focus');
			input.props().value = '시원한 물';
			input.simulate('blur');
		});
		wrapper.update();
		handleChange(name);
		expect(input.props().value).toEqual('시원한 물');
	});

	it('Price 입력', () => {
		const name = 'price';
		const input = wrapper.find('input#standard-basic-price');
		act(() => {
			input.simulate('focus');
			input.props().value = 1500;
			input.simulate('blur');
		});
		wrapper.update();
		handleChange(name);
		expect(input.props().value).toEqual(1500);
	});

	it('carbon_emission 입력', () => {
		const name = 'carbon_emission';
		const input = wrapper.find('input#standard-basic-carbon_emission');
		act(() => {
			input.simulate('focus');
			input.props().value = 10;
			input.simulate('blur');
		});
		wrapper.update();
		handleChange(name);
		expect(input.props().value).toEqual(10);
	});

	it('is_eco 입력', () => {
		const name = 'is_eco_friendly';
		const input = wrapper.find('input#is_eco');
		act(() => {
			input.simulate('focus');
			input.props().value = false;
			input.simulate('blur');
		});
		wrapper.update();
		handleChange(name);
		expect(input.props().value).toEqual(false);
	});
});
