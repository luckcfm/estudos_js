const gulp = require('gulp');
const babel = require('gulp-babel');
//Gulp dependecies go here

gulp.task('default', function(){
    //gulp tasks go hhere
    //Node source
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulpp.dest("dist"));

    //browser source
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});
