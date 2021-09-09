// @flow

import * as React from 'react';

import {
	Button,
	FormControlLabel,
	FormLabel,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
} from '@material-ui/core';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

export const ProductSubmitWithNoSSR = dynamic(
	() => import('../../components/ProductSubmit'),
	{
		ssr: false,
	},
);

const SubmitProduct = () => {
	return <ProductSubmitWithNoSSR />;
};

export default SubmitProduct;
