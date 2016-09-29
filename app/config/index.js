'use strict';

var init = function () {

	if(process.env.NODE_ENV === 'production') {
		return {
			dbURI: process.env.MONGO_URI,
			sessionSecret: process.env.SESSION_SECRET,
			facebook: {
				clientID: process.env.FACEBOOK_CLIENT_ID,
				clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
				callbackURL: "/auth/facebook/callback",
				profileFields: ['id', 'displayName', 'photos']
			},
			twitter:{
				consumerKey: process.env.TWITTER_CONSUMER_KEY,
				consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
				callbackURL: "/auth/twitter/callback",
				profileFields: ['id', 'displayName', 'photos']
			},
			redis: {
				host: process.env.REDIS_HOST,
				port: redisURI.REDIS_PORT
			}
		}
	}
	else {
		return require('./config.json');
	}
}

module.exports = init();
