import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

gulp.task('ppt', () => {
    return gulp.src('./ppt/**/*')
        .pipe(ghPages());
});




gulp.task("default", ['ppt']);
