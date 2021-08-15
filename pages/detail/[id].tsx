import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const detail = () => {
	const router = useRouter;
	console.log(router); // 라우터 객체를 출력합니다.

	return (
		<div>
			<h2>Hello!</h2>
			<Link href="/">Move to main</Link>
		</div>
	);
};

export default detail;
