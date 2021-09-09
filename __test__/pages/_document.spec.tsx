/**
 * @jest-environment jsdom
 */

import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';

import PagesApp from '../../pages/_document';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';

describe('pages/_document 스냅샷 테스트', () => {
	it('페이지 랜더링', () => {});
});
