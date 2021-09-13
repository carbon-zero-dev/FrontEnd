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
