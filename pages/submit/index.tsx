// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Button, FormControlLabel, FormLabel, InputAdornment, Radio, TextField, RadioGroup } from '@material-ui/core';

const ProductSubmitForm = styled.form`
	width: 80%;
	align-items: center;
	text-align: center;
	border: 2px solid red;
	border-radius: 10px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding: 40px;
`

const TextFieldInput = styled(TextField)`
	width: 40%;
	margin: 20px auto;
`

const SubmitProduct = () => {
	return (
		<ProductSubmitForm noValidate autoComplete="off">
			<h1>프로덕트 정보를 입력해주세요.</h1>
			<TextFieldInput id="standard-basic" label="name" />
			<TextFieldInput id="standard-basic" label="brand" />
			<TextFieldInput id="standard-basic" label="category" />
			<TextFieldInput id="standard-basic" label="description" />
			<TextFieldInput id="standard-basic" label="price" type="number" InputProps={{
				startAdornment: <InputAdornment position="start">₩</InputAdornment>,
			}}/>
			<TextFieldInput id="standard-basic" label="carbon_emissions" type="number"/>
			<FormLabel style={{textAlign: 'left', marginTop: '20px'}}>is_eco</FormLabel>
			<RadioGroup aria-label="eco" name="is_eco_friendly" defaultValue="true">
				<FormControlLabel value="true" control={<Radio />} label="true" />
				<FormControlLabel value="false" control={<Radio />} label="false" />
			</RadioGroup>
			<Button variant="contained" type="submit" onClick={() => alert('프로덕트 등록!')}>프로덕트 등록하기</Button>
		</ProductSubmitForm>
	);
};

export default SubmitProduct
