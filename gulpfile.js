/*jslint node: true*/

'use strict';

var gulp    = require('gulp');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var sass    = require('gulp-sass');
var maps    = require('gulp-sourcemaps');

// Testtask with name 'hello'

gulp.task('hello', function () {
    console.log('I just say hello in the console!');
});

// ConcatScripts: allows to bundle js files

gulp.task('concatScripts', function () {
    return gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'])
        .pipe(maps.init())
        .pipe(concat('app.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js'));
});

// MinifyScripts: allows to minify js files

gulp.task('minifyScripts', ['concatScripts'], function () {
    return gulp.src('js/app.js')
                .pipe(uglify())
                .pipe(rename('app.min.js'))
                .pipe(gulp.dest('js'));
});

// CompileSass: allows to compile sass to css

gulp.task('compileSass', function () {
    return gulp.src('scss/application.scss')
                .pipe(maps.init())
                .pipe(sass())
                .pipe(maps.write('./'))
                .pipe(gulp.dest('css'));
});

// Build task: comnbines all needed tasks to build the app

gulp.task('build', ['minifyScripts', 'compileSass'], function () {
    return gulp.src(['css/application.css', 'js/app.min.js', 'index.html',
                   'img/**', 'fonts/**'], {base: './'})
                .pipe(gulp.dest('dist'));
});

// Sass watch-task: watches filechanges and runs the cfompileSass task

gulp.task('watchSass', function () {
    gulp.watch(['scss/**/*.scss'], ['compileSass']);
});

// Set default task

gulp.task('default', ['hello', 'build']);