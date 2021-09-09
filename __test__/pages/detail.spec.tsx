/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { act, render, screen } from '@testing-library/react';

import DetailPage from '../../pages/detail/[id]';
import { RecoilRoot } from 'recoil';
import { certified_product } from '../../utils/dummtData';

describe('pages/detail 스냅샷 테스트', () => {
	it('페이지 랜더링', async () => {
		await act(async () => {
			const el = await render(
				<RecoilRoot>
					<Suspense fallback={<div>Loading...</div>}>
						<DetailPage testProduct={certified_product} />
					</Suspense>
				</RecoilRoot>,
			);
			expect(el).toMatchSnapshot();
		});
	});
});
