import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { RecoilRoot } from 'recoil';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<title>Carbon Zero</title>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
