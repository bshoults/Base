// Vars
var gulp = require('gulp');

// JS Vars
//var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// CSS Vars
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
var cssnano = require('cssnano')({preset: 'default'});
var mqpacker = require("css-mqpacker");
var autoprefixer = require('autoprefixer');

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
  // .pipe(jshint('.jshintrc'))
  // .pipe(jshint.reporter('default'))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dest/js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(gulp.dest('dest/js'))
});

// Styles
gulp.task('styles', function () {
  var processors = [
    tailwindcss('./tailwind.js'),
    autoprefixer,
    mqpacker,
    cssnano
  ];

  return gulp.src('src/styles.css')
    .pipe(postcss(processors))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dest/assets/css'));
});
