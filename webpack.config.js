module.exports = {
	  devtool: 'source-map',
    resolve:{
        extensions: ['', '.js', '.ts']
    },
	  output: {
		    filename: 'bundle.js'
	  },
	  module: {
		loaders: [
			  { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
			  { test: /\.ts$/, exclude: [/app\/lib/, /node_modules/], loader: 'awesome-typescript-loader?module=commonjs' },
			  { test: /\.html$/, loader: 'raw' },
			  { test: /\.styl$/, loader: 'style!css!stylus' },
			  { test: /\.css$/, loader: 'style!css' },
			  { test: /\.png$/, loader: 'url-loader' },
			  { test: /\.(otf|eot|svg|ttf|woff|woff2)$/, loader: 'url-loader' }
		]
	  }
};
