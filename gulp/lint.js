var gulp = require('gulp'),
	eslint = require('gulp-eslint'),
	notify = require('gulp-notify'),
	env = require('./getGlobals.js');

gulp.task('lint', function() {
	'use strict';
	var base = env.DEV_FILES_DIR + '/' + env.JS_DIR + '/';
	return gulp
		.src(base + '*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError())
		.on('error', notify.onError());
});
