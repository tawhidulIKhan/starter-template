'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

let scssSrcFiles = './dist/assets/scss/**/*.scss';
let scssDistFiles = './dist/assets/css';


 
gulp.task('sass', function () {
  return gulp.src(scssSrcFiles)
    .pipe(sass().on('error', sass.logError))
	  	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
.pipe(gulp.dest(scssDistFiles));
});


gulp.task('watch', function() {
    gulp.watch('./dist/assets/scss/**/*.scss',gulp.series('sass'));
});

