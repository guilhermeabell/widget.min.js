module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
       dist: {
         src: ['Product/**/*.js']
       }
    },
    uglify: {
        scripts: {
            src: ['Product/widget.js'],
            dest: 'Product/widget.min.js'
        }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('minify', ['uglify']);
}