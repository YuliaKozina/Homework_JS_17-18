var gulp = require("gulp");
var concat = require("gulp-concat");
var minify_css = require("gulp-clean-css");
var uglify = require('gulp-uglifyjs');
var clean = require("gulp-clean");

gulp.task('clean', ['clean:css', 'clean:js']);

gulp.task('clean:css', function () {
    return gulp.src('dist/css')
        .pipe(clean({ force: true }))
});

gulp.task('clean:js', function () {
    return gulp.src('dist/js')
        .pipe(clean({ force: true }))
});

gulp.task('css', function () {
    return gulp.src('src/**/*.css')
        .pipe(concat('main-style.css'))
        .pipe(minify_css())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(concat('main-script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
    gulp.watch("src/js/**/*.js", ['scripts']);
    gulp.watch("src/css/**/*.css", ['css']);

})