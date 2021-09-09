/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import {
	categoryListSelector,
	productDetailSelector,
	productListSelector,
	recommendedProductListSelector,
} from '../../recoil/selectors';
import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

describe('recoil/selectors 테스트', () => {
	it('categoryListSelector 테스트', () => {
		act(() => {});
	});
	it('productDetailSelector 테스트', () => {
		act(() => {});
	});
	it('productListSelector 테스트', () => {
		act(() => {});
	});
	it('recommendedProductListSelector 테스트', () => {
		act(() => {});
	});
});
