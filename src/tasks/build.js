/* Created by Aquariuslt on 2017-03-04.*/
import gulp from "gulp";
import gulpSequence from "gulp-sequence";
import logger from "./util/logger";
import config from "./config/gulp.config";
import "./cname";
import "./clean";
import "./tags";
import "./categories";

gulp.task('build', gulpSequence(['posts'], ['categories'], ['tags']));

gulp.task('build:prod', gulpSequence(['posts'], ['categories'], ['tags'], ['cname'], ['move']));


gulp.task('move', function () {
  logger.info('Moving build dir files into dist folder');
  gulp.src(config.buildDir + '/*')
    .pipe(gulp.dest(config.distDir));
  logger.info('Move done');
});