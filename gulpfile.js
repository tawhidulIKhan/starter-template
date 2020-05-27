'use strict';
let gulp = require('gulp');
let exec = require('child_process').exec;
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let beautify = require('gulp-jsbeautifier');
let imagemin = require('gulp-imagemin');
sass.compiler = require('node-sass');

let scssSrcFiles = './dist/assets/scss/style.scss';
let scssSrcAllFiles = './dist/assets/scss/**/*.scss';
let templateSrc = './src/templates/**/*.php';
let scssDistFiles = './dist/assets/css';
let jsSrcFiles = './src/assets/js/**/*.js';
let jsDistFiles = './dist/assets/js';
let imgSrc = './src/assets/images';
let imgDist = './dist/assets/images';
let vendorsSrc = './src/assets/vendors/**/*';
let vendorsDist = './dist/assets/vendors';
var pxtorem = require('gulp-pxtorem');
var responsive = require('gulp-responsive');



// sass.compiler = require('node-sass');
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});
 
gulp.task('sass', function () {
  return gulp.src(scssSrcFiles)
    .pipe(sass().on('error', sass.logError))
	  	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
.pipe(gulp.dest(scssDistFiles));
});

// gulp.task('serve', gulp.series('sass', 'browserSync'), async function() {

//     gulp.watch(scssSrcAllFiles, ['sass', browserSync.reload]);
// });

gulp.task('watch', function() {

    // livereload.listen();

    // gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('./dist/assets/scss/**/*.scss',gulp.series('sass'));
});

// gulp.task('sass:watch', function () {
//     gulp.watch(scssSrcAllFiles, ['sass']);
//   });


// gulp.task('template', async function () {	
//     return exec('php generate.php')
// })

// //gulp.task('image', () =>
// //	 return gulp.src('src/*.{png,jpg}')
// //    .pipe(responsive({
// //      'background-*.jpg': {
// //        width: 700,
// //        quality: 50
// //      },
// //      'cover.png': {
// //        width: '50%',
// //        // convert to jpeg format
// //        format: 'jpeg',
// //        rename: 'cover.jpg'
// //      },
// //      // produce multiple images from one source
// //      'logo.png': [
// //        {
// //          width: 200
// //        },{
// //          width: 200 * 2,
// //          rename: 'logo@2x.png'
// //        }
// //      ]
// //    }))
// //    .pipe(gulp.dest('dist'));
// //);


// gulp.task('vendor', function(){
//     gulp.src([vendorsSrc])
//     .pipe(gulp.dest(vendorsDist));
// });

// gulp.task('scss', function () {
    
//     var pxtoremOptions = {
//         rootValue: 16,
//         unitPrecision: 5,
//         propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'min-height','width','height','margin','padding'],
//         selectorBlackList: [],
//         replace: true,
//         mediaQuery: false,
//         minPixelValue: 0
//     };
    
//     var postcssOptions = {
//         map: true  
//     };

//     return gulp.src(scssSrcFiles)
//         .pipe(sass().on('error', sass.logError))
// 	  	.pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(pxtorem(pxtoremOptions, postcssOptions))
//         .pipe(pxtorem())
//         .pipe(beautify())
//         .pipe(gulp.dest(scssDistFiles))
// });


// gulp.task('pxtorem', function () {

// var pxtoremOptions = {
//     rootValue: 16,
//     unitPrecision: 5,
//     propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'min-height','width','height','margin','padding'],
//     selectorBlackList: [],
//     replace: true,
//     mediaQuery: false,
//     minPixelValue: 0
// };

// var postcssOptions = {
//     map: true  
// };
	
// 	return gulp.src('./dist/assets/css/*.css')
//         .pipe(pxtorem(pxtoremOptions, postcssOptions))
//         .pipe(gulp.dest(scssDistFiles))
// });


// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./dist/"
//         }
//     });
// });

// gulp.task('js', () =>
//   gulp.src(jsSrcFiles)
//     .pipe(beautify())
//     .pipe(gulp.dest(jsDistFiles))
// );


// gulp.task('generate', () => {
//     exec('gulp scss');
//     exec('gulp js');
//     exec('gulp vendor');
// });


// gulp.task('serve', gulp.series('template', 'browserSync', 'js'), async function() {

//    gulp.watch(jsSrcFiles, ['js',browserSync.reload]);
//     gulp.watch(scssSrcAllFiles, ['scss',browserSync.reload]);
//     // gulp.watch(templateSrc, ['template',browserSync.reload]);
//     return console.log("HTTP Server Started");

// });
