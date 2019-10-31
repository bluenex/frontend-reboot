'use strict';

// ref: https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

sass.compiler = require('node-sass');

const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './src',
    },
  });
  done();
}

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});

const watch = () => gulp.watch('./src', gulp.series(reload));

gulp.task('dev', gulp.parallel([serve, watch, 'sass:watch']));
