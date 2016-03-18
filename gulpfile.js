'use strict';

/*jslint node: true*/

var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename'),
    sass    = require('gulp-sass'),
    maps    = require('gulp-sourcemaps');

//Testtask with name 'hello'
gulp.task('hello', function(){
    console.log('I just say hello in the console!');
});

//concatScripts: allows to bundle js files
gulp.task('concatScripts', function(){
    return gulp.src([
        'js/jquery.js', 
        'js/sticky/jquery.sticky.js', 
        'js/main.js'])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

//minifyScripts: allows to minify js files
gulp.task('minifyScripts', ['concatScripts'], function(){
    return gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

//compileSass: allows to compile sass to css
gulp.task('compileSass', function(){
    return gulp.src('scss/application.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});

//build task: comnbines all needed tasks to build the app
gulp.task('build',['minifyScripts', 'compileSass'], function(){
    
});

//sass watch-task: watches filechanges and runs the cfompileSass task
gulp.task('watchSass', function(){
    gulp.watch(['scss/**/*.scss'],['compileSass']);
});

//set default task
gulp.task('default', ['hello', 'build']);