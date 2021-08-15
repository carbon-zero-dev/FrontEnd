import * as React from 'react';
import { Button } from '@material-ui/core';

const SearchBar = () => (
	<form action="/" method="get">
		<input
			type="text"
			id="header-search"
			placeholder="Search blog posts"
			name="s"
			style={{ height: 40, width: 400, fontSize: 20, margin: 10 }}
		/>
		<Button variant="contained" type="submit">
			검색
		</Button>
	</form>
);

export default SearchBar;
