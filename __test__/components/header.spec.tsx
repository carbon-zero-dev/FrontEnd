/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../../components/Header';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

describe('Header 스냅샷 테스트', () => {
	it('', () => {
		act(() => {
			const el = render(
				<RecoilRoot>
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
					</Suspense>
				</RecoilRoot>,
			);
			expect(el).toMatchSnapshot();
		});
	});
});
