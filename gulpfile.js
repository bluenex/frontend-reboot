// ref: https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md
const gulp = require('gulp');
const browserSync = require('browser-sync');

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

const watch = () => gulp.watch('./src', gulp.series(reload));

gulp.task('dev', gulp.parallel([serve, watch]));
