// @flow
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputAdornment,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { categoryListSelector } from '../../recoil/selectors';
import { baseUrl } from '../../utils/useRequest';

const ProductSubmitForm = styled.form`
	width: ${innerWidth > 450 ? '80%' : 'calc(100% - 40px)'};
	align-items: center;
	text-align: center;
	border: 4px solid #30cb00;
	background-color: rgba(164, 251, 166, 0.7);
	border-radius: 10px;
	margin: ${innerWidth > 450 ? '20px auto' : '20px'};
	display: flex;
	flex-direction: column;
	padding: 40px;
	box-sizing: border-box;
`

const TextFieldInput = styled(TextField)`
	width: ${innerWidth > 450 ? '40%' : '80%'};
	margin: 20px auto;
`

const FormControlContainer = styled(FormControl)`
	width: ${innerWidth > 450 ? '40%' : '80%'};
	margin: 20px auto;
`

const ProductSubmit = () => {
	const categories = useRecoilValue(categoryListSelector);
	const [formValue, setFormValue] = useState({
		name: '',
		brand: '',
		category_id: '',
		description: '',
		price: 0,
		carbon_emissions: 0,
		is_eco_friendly: true,
		image_link: ['https://dl.dropbox.com/s/5r047c5fqiwbv8m/wrater.jpg']
	});

	const router = useRouter();

	const handleChange = name => event => {
		if(name === 'is_eco_friendly') setFormValue({ ...formValue, [name]: Boolean(event.target.value) });
		else if(name === 'price' || name === 'carbon_emission') setFormValue({ ...formValue, [name]: Number(event.target.value) });
		else setFormValue({ ...formValue, [name]: event.target.value });
	};

	const validationCheck = (name: string) => {
		if(name === 'name') {
			return formValue.name.length >= 2 && formValue.name.length <= 20
		} else if(name === 'brand') {
			return formValue.brand !== ''
		} else if(name === 'category_id') {
			return formValue.category_id !== ''
		} else if(name === 'price') {
			return formValue.price !== 0
		}
	}

	const productValidationCheck = async () => {
		await fetch(`${baseUrl}/products`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			body: JSON.stringify(formValue), // data can be `string` or {object}!
			headers:{
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			referrer: 'no-referrer',
		}).then(res => res.json())
			.then(response => {
				router.back();
			})
			.catch(error => {
			});
	}

	const CategorySection = categories.map((c,idx) => {
		return <MenuItem key={`${c}-${idx}`} value={`${c.id}`}>{`${c.name}`}</MenuItem>
	});

	const uploadImageToS3 = async (e) => {
		const preview = document.querySelector('img') as any;
		const file = e.target.files[0];
		const reader = new FileReader();

		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = async () => {
				const base64data = reader.result;
				preview.src = base64data;
				// TODO
				// await fetch('https://3wrgp1bkp5.execute-api.ap-northeast-2.amazonaws.com/carbon_prod/carbontest', {
				// 	method: 'POST',
				// 	mode: 'cors',
				// 	cache: 'no-cache',
				// 	credentials: 'same-origin',
				// 	headers:{
				// 		'Content-Type': 'Content-Type: text/plain',
				// 		'x-api-key': 'AhUcyHh5VU6LTRbj1G3oD8DSMIbRqKj06EfUT415'
				// 	},
				// 	redirect: 'follow',
				// 	referrer: 'no-referrer',
				// 	body: JSON.stringify({
				// 		IMAGE: base64data
				// 	})
				// }).then(res => res.json()).then(res => console.log(res));
			}
		}

	}

	return (
		<ProductSubmitForm noValidate autoComplete="off">
			<h1>프로덕트 정보를<br /> 입력해주세요.</h1>
			<TextFieldInput id="standard-basic" label="name" error={formValue.name.length !== 0 && !validationCheck('name')} onChange={handleChange('name')} helperText="제품 이름은 2자~20자 이내로 입력해주세요." />
			<TextFieldInput id="standard-basic" label="brand" onChange={handleChange('brand')} />
			<FormControlContainer>
			<InputLabel>category</InputLabel>
			<Select
				label="category"
				id="standard-basic"
				value={formValue.category_id}
				onChange={handleChange('category_id')}
			>
				{CategorySection}
			</Select>
			</FormControlContainer>
			<TextFieldInput id="standard-basic" label="description (option)" onChange={handleChange('description')}/>
			<TextFieldInput id="standard-basic" label="price" type="number" InputProps={{
				startAdornment: <InputAdornment position="start">₩</InputAdornment>,
			}} onChange={handleChange('price')}/>
			<TextFieldInput id="standard-basic" label="carbon_emissions (option)" type="number" onChange={handleChange('carbon_emission')}/>
			<FormLabel style={{textAlign: 'left', marginTop: '20px'}}>is_eco</FormLabel>
			<RadioGroup aria-label="eco" name="is_eco_friendly" defaultValue="true" onChange={handleChange('is_eco_friendly')}>
				<FormControlLabel value="true" control={<Radio />} label="true" />
				<FormControlLabel value="false" control={<Radio />} label="false" />
			</RadioGroup>
			<input
				accept="image/*"
				id="contained-button-file"
				multiple
				type="file"
				onChange={uploadImageToS3}
			/>
			<img id="upload-image" src='https://static.thenounproject.com/png/59103-200.png' width="100" height="100" alt="이미지" />
			<Button variant="contained" type="submit" onClick={productValidationCheck} disabled={!validationCheck('name') || !validationCheck('brand') || !validationCheck('category_id') || !validationCheck('price')}>프로덕트 등록하기</Button>
		</ProductSubmitForm>
	);
};

export default ProductSubmit
