var gulp = require('gulp'),
	spritesmith = require('gulp.spritesmith'),
	imagemin = require('gulp-imagemin'),
	buffer = require('vinyl-buffer'),
	merge = require('merge-stream');
 
gulp.task('sprite', function () {
  var spriteData = gulp.src('images/*.png')
  .pipe(spritesmith({
	//retinaSrcFilter: ['images/*@2x.png'],
	//retinaImgName: 'sprite@2x.png',
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    algorithm: 'binary-tree',
	padding: 2
  }));
  var imgStream = spriteData.img
  .pipe(buffer())
  .pipe(imagemin())
  .pipe(gulp.dest('output/'));
  var cssStream = spriteData.css
  .pipe(gulp.dest('output/'));
  return merge(imgStream, cssStream);
});