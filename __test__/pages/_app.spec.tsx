/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import PagesApp from '../../pages/_app';
import { RecoilRoot } from 'recoil';
import { certified_product } from '../../utils/dummtData';

describe('pages/_app 스냅샷 테스트', () => {
	it('페이지 랜더링', () => {});
});
