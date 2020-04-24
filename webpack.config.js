const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react"],
				},
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"],
			},
		],
	},
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		open: true,
	},
	plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
};
