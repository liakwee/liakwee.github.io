var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  runSequence = require('run-sequence'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  cp = require('child_process'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps');

module.exports = gulp;

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .on('error', function (err) {
      console.log(err.message);
      browserSync.notify(err.message);
    })
    //.pipe($.autoprefixer(('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', { map: true })))
    .pipe(gulp.dest('_site/js'))
    .pipe(browserSync.reload({stream: true}))
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
//gulp.task('sass', function () {
// return gulp.src('_scss/**/*.scss')
//   .pipe(sass({sourcemap: true}))
//   .on('error', function (error) {
//     console.error(error.message);
//     browserSync.notify(error.message);
//     this.emit('end');
//   })
//   .pipe(sourcemaps.init({loadMaps: true}))
//   .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
//   .pipe(sourcemaps.write())
//   .pipe(gulp.dest('_site/css'))
//   .pipe(browserSync.reload({stream:true}))
//   .pipe(gulp.dest('css'));
// });


//-- compile scss into css and auto prefix css files
gulp.task('sass', function () {
  return gulp.src('_scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.rubySass({
      lineNumbers: true,
      style: 'compressed',
      precision: 10,
      sourcemap: 'auto',
      sourcemapPath: '../scss'
    }))
    .on('error', function (err) {
      console.log(err.message);
      browserSync.notify(err.message);
    })
    //.pipe($.autoprefixer(('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4', { map: true })))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('css'));
});


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('_scss/**/*.scss', ['sass']);
  gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
  gulp.watch('_posts/**/*.markdown', ['jekyll-rebuild']);
  gulp.watch('js/**/*.js', ['js', 'jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
