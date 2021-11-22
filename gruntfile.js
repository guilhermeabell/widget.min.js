module.exports = function (grunt) {

  grunt.initConfig({
    uglify: {
      scripts: {
        src: ['Product/widget.js'],
        dest: 'Product/widget.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('minify', ['uglify']);
}