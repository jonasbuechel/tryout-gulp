'use strict';

/*jslint node: true*/

var gulp    = require('gulp'),
    concat  = require('gulp-concat');

//Testtask with name 'hello'
gulp.task('hello', function(){
    console.log('I just say hello in the console!');
});

//Testtask with name 'hello'
gulp.task('concatScripts', function(){
    gulp.src([
        'js/jquery.js', 
        'js/sticky/jquery.sticky.js', 
        'js/main.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));
});

//set default task
gulp.task('default', ['hello']);