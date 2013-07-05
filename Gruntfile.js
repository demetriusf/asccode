module.exports = function(grunt) {
  grunt.initConfig({
     uglify: {
        'js/main.min.js': 'js/main.js'  
     }
  });
 
  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};
