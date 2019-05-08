module.exports = {
	mode: 'production',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: './dist/[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.less$/,
				use : [
					{ loader : 'style-loader' },
					{ loader : 'css-loader' },
					{
						loader: 'less-loader',
						options : {
							javascriptEnabled: true
						}
					}
				]
			}
		]
	}
};