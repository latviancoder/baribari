var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

gulp.task('scripts', function() {
	gulp.src('client.js')
		.pipe($.plumber())
		.pipe($.webpack({
			watch: true,
			entry: "./client.js",
			output: {
				filename: "build.js"
			},
			module: {
				loaders: [
					{
						test: /\.json$/,
						loader: 'json'
					},
					{test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader?harmony'}
				],
				preLoaders: [
					{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
				],
				noParse: /lie.js/
			}
		}))
		.pipe(gulp.dest('./public'))
		.pipe($.livereload())
});

gulp.task('html', function() {
	gulp.src('views/**/*.ejs')
		.pipe($.livereload());
});

gulp.task('stylesheets', function() {
	gulp.src('src/stylesheets/main.less')
		.pipe($.plumber())
		.pipe($.less())
		.pipe($.concat('build.css'))
		.pipe(gulp.dest('./public'))
		.pipe($.livereload())
});

gulp.task('watch', function() {
	gulp.watch('views/**/*.ejs', ['html']);
	gulp.watch('src/stylesheets/**', ['stylesheets']);

	$.livereload.listen(12347);
});

gulp.task('default', ['scripts', 'stylesheets', 'html', 'watch']);