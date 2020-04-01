
var { src, dest, watch, series, parallel } = require('gulp');
var autoprefixer = require('autoprefixer');
var browserSync = require("browser-sync").create();
var cssnano = require('cssnano');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var files = {
    scssPath: 'app/src/scss/**/*.scss',
    jsPath: 'app/src/scripts/**/*.js',
    htmlPath: 'app/*.html'
}

function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write(''))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function jsTask() {
    return src(files.jsPath)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

function reload() {
    browserSync.reload();
}

function watchTask() {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        notify: false
    });
    watch([files.scssPath, files.jsPath],
        series(
            parallel(scssTask, jsTask)
        )
    );
    watch(files.htmlPath, reload);
}

exports.default = series(
    parallel(scssTask, jsTask),
    watchTask
);

