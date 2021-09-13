const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
	compress: true,
	react: {
		useSuspense: false,
		wait: true,
	},
	devServer: {
		proxy: {
			'/products': {
				target: 'https://www.carbon-zero.kr',
				changeOrigin: true,
				pathRewrite: { '^/products': '' },
			},
			'/carbon_prod/carbontest': {
				target: 'https://3wrgp1bkp5.execute-api.ap-northeast-2.amazonaws.com',
				changeOrigin: true,
				pathRewrite: { '^/carbon_prod/carbontest': '' },
			},
		}
	},
	webpack(config) {
		let prod = process.env.NODE_ENV === "production";
		return {
			...config,
			mode: prod ? "production" : "development",
			devtool: prod ? "hidden-source-map" : "eval",
		};
	},
});
