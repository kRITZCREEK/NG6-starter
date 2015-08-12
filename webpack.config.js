module.exports = {
	  devtool: 'source-map',
    resolve:{
        extensions: ['', '.js']
    },
	  output: {
		    filename: 'bundle.js'
	  },
	  module: {
		loaders: [
			  { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
			  { test: /\.html$/, loader: 'raw' },
			  { test: /\.styl$/, loader: 'style!css!stylus' },
			  { test: /\.css$/, loader: 'style!css' },
			  { test: /\.png$/, loader: 'url-loader' },
			  { test: /\.json$/, loader: 'json-loader' },
			  { test: /\.(otf|eot|svg|ttf|woff|woff2)$/, loader: 'url-loader' }
		]
	  }
};
