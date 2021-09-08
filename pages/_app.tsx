import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import '/style/global.css'


const MyApp = ({Component, pageProps}) => {

const SsrCompatibleSuspense = process.browser ? Suspense : props => props.children

	return (
		<RecoilRoot>
			<SsrCompatibleSuspense fallback={<div>Loading...</div>}>
				<Component {...pageProps}/>
			</SsrCompatibleSuspense>
		</RecoilRoot>
	)
}

export default MyApp;
