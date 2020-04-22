const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app/index.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		host: '0.0.0.0'
	},
	resolve: {
		extensions: ['.ts', '.scss', '.js'],
		modules: [path.resolve(process.cwd(), 'node_modules')]
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/typescript'],
						plugins: [
							'@babel/plugin-transform-typescript',
							['@babel/plugin-proposal-decorators', { legacy: true }],
							'@babel/plugin-proposal-object-rest-spread',
							'@babel/plugin-transform-object-assign',
							['@babel/plugin-proposal-class-properties', { loose: true }],
							'@babel/plugin-transform-classes'
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/images'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/app/index.html',
			inject: true
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new CopyWebpackPlugin([
			{
				from: './src/assets/images',
				to: 'assets/images'
			}
		])
	]
};
