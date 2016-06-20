var gulp = require('gulp');
var babel = require('gulp-babel');
var stylus = require('gulp-stylus');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('devserver', function() {
    connect.server({
        root: ['dist'],
        fallback: './dist/index.html'
    });
});

gulp.task('clean', function() {
    gulp.src('./dist/*', {read: false})
        .pipe(clean());
});

gulp.task('copy', function() {
    gulp.src(['./src/*.html', './src/**/*.{woff,otf,svg}'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
    gulp.src('./src/index.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
        browserify({entries: './src/index.jsx', debug: true})
            .transform("babelify", { "presets": ["es2015", "react"] })
            .bundle()
            .pipe(source('index.js'))
            .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.{js,jsx}', ['js']);
    gulp.watch('./src/**/*.styl', ['css']);
    gulp.watch('./src/**/*.html', ['copy']);
});

gulp.task('build', ['clean', 'copy', 'js', 'css', 'watch', 'devserver']);
