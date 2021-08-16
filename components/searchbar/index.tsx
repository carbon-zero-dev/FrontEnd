import * as React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const TextInputContainer = styled.input`
	height: 40px;
	width: 400px;
	fontsize: 20px;
	margin: 10px;
`;

const SearchBar = () => (
	<form action="/" method="get">
		<TextInputContainer
			type="text"
			id="search"
			placeholder="탄소 노노 제품 검색"
			name="search"
		/>
		<Button variant="contained" type="submit">
			검색
		</Button>
	</form>
);

export default SearchBar;
