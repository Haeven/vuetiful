const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'production',
	entry: ['./src/index.js'],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							prependData: '@import "./src/styles/_variables.scss";'
						}
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},
	plugins: [new VueLoaderPlugin()]
};
