/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import Pages from '../../pages/index';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

describe('pages/index 스냅샷 테스트', () => {
	it('페이지 랜더링', async () => {
		await act(async () => {
			const el = await render(
				<RecoilRoot>
					<Suspense fallback={<div>Loading...</div>}>
						<Pages />
					</Suspense>
				</RecoilRoot>,
			);
			expect(el).toMatchSnapshot();
		});
	});
});
