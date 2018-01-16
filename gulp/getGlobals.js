require('dotenv').config({ silent: true });
var config = require('../config.json').defaults;

module.exports = {
	DEV_FILES_DIR: process.env.DEV_FILES_DIR ? process.env.DEV_FILES_DIR : 'dev',
	JS_DIR: process.env.JS_DIR ? process.env.JS_DIR : config.JS_DIR,
	SCSS_DIR: process.env.SCSS_DIR ? process.env.SCSS_DIR : config.SCSS_DIR,
	AUTOPREFIX_ARGS: process.env.AUTOPREFIX_ARGS
		? process.env.AUTOPREFIX_ARGS
		: config.AUTOPREFIX_ARGS,
	CONTENT_DIR: process.env.CONTENT_DIR
		? process.env.CONTENT_DIR
		: config.CONTENT_DIR,
	USE_BABEL: process.env.USE_BABEL ? process.env.USE_BABEL : config.USE_BABEL,
	USE_MODERNIZR: process.env.USE_MODERNIZR
		? process.env.USE_MODERNIZR
		: config.USE_MODERNIZR,
	SVG_DIR: process.env.SVG_DIR ? process.env.SVG_DIR : config.SVG_DIR,
	RUN_SERVER: process.env.RUN_SERVER
		? process.env.RUN_SERVER
		: config.RUN_SERVER
};
