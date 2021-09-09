/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import SubmitPage from '../../pages/submit';

describe('pages/submit 스냅샷 테스트', () => {
	test('페이지 랜더링', async () => {
		const el = await render(
			<RecoilRoot>
				<Suspense fallback={<div>Loading...</div>}>
					<SubmitPage />
				</Suspense>
			</RecoilRoot>,
		);
		expect(el).toMatchSnapshot();
	});
});
