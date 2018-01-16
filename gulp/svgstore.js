require('dotenv').config({ silent: true });
// Include gulp
var gulp = require('gulp'),
	cheerio = require('gulp-cheerio'),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	notify = require('gulp-notify'),
	config = require('../config.json'),
	rename = require('gulp-rename'),
	env = require('./getGlobals.js');

gulp.task('svgstore', function() {
	'use strict';
	return gulp
		.src(env.DEV_FILES_DIR + '/' + env.SVG_DIR + '/*.svg')
		.pipe(
			cheerio({
				run: function($) {
					$('[fill]').removeAttr('fill');
				},
				parserOptions: { xmlMode: true }
			})
		)
		.pipe(svgmin())
		.pipe(svgstore({ inlineSvg: true }))
		.pipe(
			cheerio({
				run: function($) {
					$('svg').attr('width', 0);
					$('svg').attr('height', 0);
				},
				parserOptions: { xmlMode: true }
			})
		)
		.pipe(rename('inline-svgsprite.html'))
		.pipe(
			gulp.dest(config.projectDir + '/' + env.CONTENT_DIR + '/' + 'svgsprite/')
		)
		.pipe(notify('SVGs Exported'));
});
