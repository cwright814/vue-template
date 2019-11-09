module.exports = {
	configureWebpack: {
		devServer: {
			host: require('ip').address()
		}
	}
};