'use strict'

var gulp = require('gulp')
var connect = require('gulp-connect')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')
var minify = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var babel = require('gulp-babel')

var config = {
	distPath: 'app/',
	srcPath: 'src/'
}

// connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  })
})

// js
gulp.task('js', function() {
  gulp.src(config.srcPath + 'js/*.js')
		.pipe(babel())
    .pipe(gulp.dest(config.distPath + 'js/'))
})

// sass
gulp.task('sass', function() {
  gulp.src(config.srcPath + 'scss/*.scss')
    .pipe(sass())
		.pipe(autoprefixer())
    .pipe(gulp.dest(config.distPath + 'css/'))
})

// image
gulp.task('image', function() {
  gulp.src(config.srcPath + 'img/**')
    .pipe(gulp.dest(config.distPath + 'img/'))
})

// html
gulp.task('html', function() {
  gulp.src(config.srcPath + '*.html')
    .pipe(gulp.dest(config.distPath))
})

// manifest
gulp.task('manifest', function() {
	gulp.src('manifest.json')
    .pipe(gulp.dest(config.distPath))
})

// watch
gulp.task('watch', function() {
  // 建立浏览器自动刷新服务器
  // browserSync.init({
  //   server: {
  //     baseDir: config.distPath
  //   }
  // })

  // 预处理
  gulp.watch(config.srcPath + 'js/*.js', ['js'])
  gulp.watch(config.srcPath + 'scss/*.scss', ['sass'])
  gulp.watch(config.srcPath + '*.html', ['html'])
  gulp.watch(config.srcPath + 'img/**', ['image'])
  gulp.watch('manifest.json', ['manifest'])

  // 自动刷新
  // gulp.watch(config.distPath + '**', function() {
  //   browserSync.reload()
  // })

})

// build
gulp.task('build', ['js', 'sass', 'html', 'image', 'manifest'])

// default task
gulp.task('default', ['manifest', 'watch'])
