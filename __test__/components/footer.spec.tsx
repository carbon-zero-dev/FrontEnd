/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../../components/Footer';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

describe('Footer 테스트', () => {
	test('footer 스냅샷 테스트', () => {
		act(() => {
			const el = render(
				<RecoilRoot>
					<Suspense fallback={<div>Loading...</div>}>
						<Footer />
					</Suspense>
				</RecoilRoot>,
			);
			expect(el).toMatchSnapshot();
		});
	});
	test('ScrollToTop: 맨 위로 이동하는 함수 테스트', () => {});
});
