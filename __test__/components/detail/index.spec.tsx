/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import {
	certified_product,
	non_certified_product,
} from '../../../utils/dummtData';
import { render, screen } from '@testing-library/react';

import Detail from '../../../components/Detail';
import { RecoilRoot } from 'recoil';

describe('DetailPage 스냅샷 테스트', () => {
	test('친환경 인증 제품', () => {
		const el = render(
			<RecoilRoot>
				<Suspense fallback={<div>Loading... </div>}>
					<Detail testProduct={certified_product} />
				</Suspense>
			</RecoilRoot>,
		);
		expect(el).toMatchSnapshot();
	});
	test('일반 제품', () => {
		const el = render(
			<RecoilRoot>
				<Suspense fallback={<div>Loading... </div>}>
					<Detail testProduct={non_certified_product} />
				</Suspense>
			</RecoilRoot>,
		);
		expect(el).toMatchSnapshot();
	});
});
