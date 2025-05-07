import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: 'production', 
	entry: './js/script.js',
	watch: true,
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module:{
	rules:[
		{test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
	]
	}
};