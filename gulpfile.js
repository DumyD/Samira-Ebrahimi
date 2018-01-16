// Include gulp
var requireDir = require('require-dir'),
	gulp = require('gulp'),
	// Include Our Plugins
	notify = require('gulp-notify'),
	livereload = require('gulp-livereload'),
	webserver = require('gulp-webserver'),
	env = require('./gulp/getGlobals.js');

requireDir('./gulp', { recurse: true });

// Watch Files For Changes
gulp.task('startwatch', ['lint', 'sass', 'scripts', 'svgstore', 'watch']);

gulp.task('watch', function() {
	'use strict';
	livereload.listen();
	gulp.watch(env.DEV_FILES_DIR + '/' + env.JS_DIR + '/**/**/*.js', [
		'lint',
		'scripts'
	]);
	gulp.watch(env.DEV_FILES_DIR + '/' + env.SCSS_DIR + '/**/**/*.scss', [
		'sass'
	]);
	gulp.watch(env.DEV_FILES_DIR + '/' + env.SVG_DIR + '/**/**/*.svg', [
		'svgstore'
	]);
	gulp.watch('web/**/**/**/*.html').on('change', function(file) {
		livereload.reload(file);
		notify('Templates Refreshed');
	});
	if (env.RUN_SERVER === 'true') {
		gulp.src('./web/').pipe(
			webserver({
				livereload: true,
				directoryListing: false,
				open: true
			})
		);
	}
});

gulp.task('build', ['lint', 'sass', 'scripts', 'svgstore']);

gulp.task('default', ['lint', 'sass', 'scripts', 'svgstore']);
