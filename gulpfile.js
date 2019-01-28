var gulp = require('gulp')
var sass = require('gulp-sass')
var prefix = require('gulp-autoprefixer')

function buildSass()
{
    return gulp.src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(prefix({ browsers: ['last 2 versions'] }))
        .pipe(gulp.dest('dist'))
}

exports.default = buildSass