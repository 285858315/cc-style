'use strict'
var gulp = require("gulp")
var postcss = require("gulp-postcss")
var mixins = require("postcss-mixins")//混合//函数功能
var vars = require('postcss-simple-vars')//变量
var nested = require('postcss-nested')//嵌套
var atImport = require('postcss-import')//导入
var autoprefixer = require("autoprefixer")//添加前缀
var csswring = require("csswring")//压缩
var classPrfx = require('postcss-class-prefix')//类名前缀

var dir = {
	out:"z:\\vue-build\\src\\common\\style"
}

gulp.task("css",function(){
	var processors = [
		atImport,
		vars,
		mixins,
		nested,
		autoprefixer({browsers: ['last 40 version']}),
		classPrfx("cc-"),
//		csswring,
	]
	return gulp.src("./src/**/*.css")
		.pipe(postcss(processors))
		.pipe(gulp.dest(dir.out))			
})

gulp.task("watch",function(){
	gulp.watch("./src/**/*.css",["css"])
})

gulp.task("default",["watch","css"])