const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		backgroundPage: path.join(__dirname, 'src/backgroundPage.ts'),
		popup: path.join(__dirname, 'src/popup/index.tsx'),
		popupServe: path.join(__dirname, 'src/popup/index-serve.tsx'),
	},
	output: {
		path: path.join(__dirname, 'dist/js'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.tsx?$/,
				use: 'ts-loader',
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				exclude: /node_modules/,
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader', // Creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // Translates CSS into CommonJS
					},
					{
						loader: 'sass-loader', // Compiles Sass to CSS
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader', // Creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // Translates CSS into CommonJS
					},
					{
						loader: 'sass-loader', // Compiles Sass to CSS
					},
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@src': path.resolve(__dirname, 'src/'),
		},
	},
	plugins: [new HtmlWebpackPlugin()],
}
