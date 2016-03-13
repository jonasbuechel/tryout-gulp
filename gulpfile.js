'use strict';

/*jslint node: true*/

var gulp = require('gulp');

//Testtask with name 'hello'
gulp.task('hello', function(){
    console.log('I just say hello in the console!');
});

//set default task
gulp.task('default', ['hello']);