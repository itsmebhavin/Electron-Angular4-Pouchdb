var gulp = require('gulp'),
    gutil = require('gulp-util'),
    es = require('event-stream'),
    winstaller = require('electron-windows-installer'),
    injectVersion = require('gulp-inject-version'),
    concatCss = require('gulp-concat-css'),
    inject = require('gulp-inject-string'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    env = (process.env.NODE_ENV);

var packageName = 'UFP-win32-x64';
var path = require('path');
var configName = '';
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/,
    camelize: true
});
console.log('GULP is running for NODE_ENV = ' + env);


gulp.task('clean', function() {
    return gulp.src('dist/*', {
            read: false
        })
        .pipe(plumber())
        .pipe(plugins.clean());
});

gulp.task('inject-versions', ['clean'], function(done) {
    /*
        Getting Application Version
        Plugin - gulp-inject-version (https://www.npmjs.com/package/gulp-inject-version)
        Replace placeholder - %%GULP_INJECT_VERSION%%
     */

    //First- inject the correct version
    return es.merge([
        gulp.src('src/index.local.html')
        .pipe(plumber())
        .pipe(injectVersion())
        .pipe(rename('/index.html'))
        .pipe(gulp.dest('src/')),

    ]);
});

gulp.task('bundle-css', function() {
    return gulp.src('src/styles/app.*.css')
        .pipe(plumber())
        .pipe(concatCss("./bundle.css"))
        .pipe(gulp.dest('src/styles/'));
});

gulp.task('default', ['inject-versions', 'bundle-css'], function() {});