/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';
import { commafy } from '../../utils/numbers';

describe('utils/number 테스트', () => {
	const arr = [-1, 0, 1000, 12000, 123456789, 1000000];
	it('commafy 함수 테스트', async () => {
		await act(async () => {
			await expect(commafy(arr[0])).toThrowError('');
			await expect(commafy(arr[1])).toEqual('0');
			await expect(commafy(arr[2])).toEqual('1,000');
			await expect(commafy(arr[3])).toEqual('12,000');
			await expect(commafy(arr[4])).toEqual('123,456,789');
			await expect(commafy(arr[5])).toEqual('1,000,000');
		});
	});
});
