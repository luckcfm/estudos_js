const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
//Gulp dependecies go here

gulp.task('default', function(){
    //run ESLint
    gulp.task('default', function(){
        gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());
    });
    //Node source
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));

    //browser source
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});
