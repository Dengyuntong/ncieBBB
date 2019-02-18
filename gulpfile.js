var gulp = require('gulp');
var clean = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var server = require('gulp-webserver');

//编译css
gulp.task('sass', function() {
    return gulp.src('./src/scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'))
})

//压缩css
gulp.task('clean', function() {
    return gulp.src('./src/css/index.css')
        .pipe(clean())
        .pipe(gulp.dest('./src/css/'))
})

//监听
gulp.task('watch', function() {
    gulp.watch('./src/scss/index.scss', gulp.series('sass', 'clean'))
})

//压缩JS文件
gulp.task('uglify', function() {
    return gulp.src('./src/js/*.js')
        // .pipe(babel({
        //     presets: 'es2015',

    .pipe(uglify())
        .pipe(gulp.dest('./src/js/'))
})

//服务
gulp.task('server', function() {
    return gulp.src('./src/')
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true
        }))
})

//build任务
gulp.task('build', function() {
    return gulp.src(['./src/css/index.css', './src/js/index.js'])
        .pipe(gulp.dest('./dist'))
})