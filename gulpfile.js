var gulp = require('gulp');

// 
// gulp.task("html",async()=>{
// 	gulp.src("./*.html")
//      .pipe(gulp.dest("D:\\phpStudy\\WWW\\dddd"));
// });
// 
// gulp.task("php",async()=>{
//  gulp.src("php/**/*")
//      .pipe(gulp.dest("D:\\phpStudy\\WWW\\derier"));
// });
//
// gulp.task("css",async()=>{
//  gulp.src("css/**/*")
//      .pipe(gulp.dest("D:\\phpStudy\\WWW\\derier\\css"));
// });
//gulp.task("js",async()=>{
//  gulp.src("js/**/*")
//      .pipe(gulp.dest("D:\\phpStudy\WWW\derier\\js"));
//});
//gulp.task("font",async()=>{
//  gulp.src("font/**/*")
//      .pipe(gulp.dest("D:\\phpStudy\WWW\derier\\font"));
//});
//
//gulp.task("img",async()=>{
//  gulp.src("img/**/*")
//      .pipe(gulp.dest("D:\\phpStudy\WWW\derier\\img"));
//});
//  

gulp.task("watch-all",async ()=>{
	
	gulp.watch("*.html",async()=>{
		gulp.src("*.html")
		 .pipe(gulp.dest("D:\\phpStudy\\WWW\\derier"));
	});
		
	gulp.watch("*.php",async()=>{
	    gulp.src("*.php")
	        .pipe(gulp.dest("D:\\phpStudy\\WWW\\derier"));
	});
// 	
	gulp.watch("css",async()=>{
	    gulp.src("css/**/*")
	        .pipe(gulp.dest("D:\\phpStudy\\WWW\\derier\\css"));
	});
// 	
	gulp.watch("js",async()=>{
	    gulp.src("js/**/*")
	        .pipe(gulp.dest("D:\\phpStudy\\WWW\\derier\\js"));
	});
// 	
	gulp.watch("font",async()=>{
	    gulp.src("font/**/*")
	        .pipe(gulp.dest("D:\phpStudy\WWW\derier\\font"));
	});
	
	gulp.watch("img",async()=>{
	    gulp.src("img/**/*")
	        .pipe(gulp.dest("D:\\phpStudy\\WWW\\derier\\img"));
	});
// 
});