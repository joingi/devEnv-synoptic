var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	postcss = require('gulp-postcss'),
	cssnano = require('cssnano'),
  autoprefixer = require('autoprefixer'),
  runSequence = require('run-sequence'),
  imagemin = require('gulp-imagemin'),
  htmlmin = require('gulp-htmlmin'),
  sassLint = require('gulp-sass-lint');

gulp.task('hello', function(){
	console.log("Hello, class!");
});

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass()) // Using gulp-sass   
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
      index: 'index.html'
    },
  })
});

gulp.task('js-conc-min', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

gulp.task('css-conc-min', function () {
	var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('app/*.html')
    	.pipe(useref())
        .pipe(gulpIf('*.css', postcss(plugins)))
        .pipe(gulp.dest('dist'));
});

gulp.task('optimize', function() {
  runSequence('js-conc-min', 'css-conc-min', 'html-min', 'images-min');
});

gulp.task('images-min', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(imagemin({
      // Setting interlaced to true
      interlaced: true,
	 verbose: true,
    }))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('html-min', function() {
  return gulp.src('app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass-lint', function () {
  return gulp.src('sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});



// Multiple watch processes a watch task
gulp.task('watch', ['browserSync'], function(){
	gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/sass/**/*.scss', ['sass']);
  // Other watchers
});
