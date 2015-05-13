module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['js/lib/jquery-1.11.2.js', 
			'js/lib/config.js', 
			'js/src/util.js', 
			'js/src/TodoModel.js', 
			'js/src/TodoCollection.js', 
			'js/src/TodoView.js',
			'js/src/tmpl.js',
			'js/main.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};