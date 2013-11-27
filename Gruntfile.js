module.exports = function(grunt) {
	grunt.initConfig({
		uglify : {
			'js/main.min.js' : 'js/main.js',
			'js/plugins.min.js' : 'js/plugins.js'
		},
		cssmin : {
			minify : {
				expand : true,
				cwd : 'css',
				src : [ '*.css', '!*.min.css' ],
				dest : 'css',
				ext : '.min.css'
			}
		}
	});

	// carrega plugins
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', [ 'uglify', 'cssmin' ]);
};
