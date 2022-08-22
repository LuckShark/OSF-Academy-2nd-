const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

// scss to css
gulp.task('scss', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })) // compressed or expanded
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true })) // Live Reload
});

// css libs debugged
gulp.task('css', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        // 'node_modules/bootstrap/dist/css/bootstrap-reboot.css',
        // 'node_modules/bootstrap/dist/css/bootstrap-grid.css'
        'node_modules/bootstrap/dist/css/bootstrap.css'
        // 'node_modules/slick-carousel/slick/slick.css',
        // 'node_modules/slick-carousel/slick/slick-theme.css'
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('app/scss/base'))
        .pipe(browserSync.reload({ stream: true })) // Live Reload
});

// html
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true })) // Live Reload
});

// js main
gulp.task('script', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true })) // Live Reload
});

// js libs
gulp.task('js', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.slim.js',
        'node_modules/popper.js/dist/umd/popper.js',
        'node_modules/bootstrap/dist/js/bootstrap.js'
        // 'node_modules/slick-carousel/slick/slick.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }))
});

// Live Reload
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

// Delete production folder
gulp.task('clean', async function () {
    del.sync('dist')
});

// Production
gulp.task('export', async function () {
    const buildHtml = gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'));
    const BuildCss = gulp.src('app/css/**/*.css')
        .pipe(gulp.dest('dist/css'));
    const BuildJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
    const BuildFonts = gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
    const BuildImg = gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function () {
    gulp.watch('app/scss/*.scss', gulp.parallel('scss'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'))