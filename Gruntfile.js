'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
      typescript_annotations: {
        default_options: {
            output: "test/output.js",
            input: "test/ExampleClass.ts"
        }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['typescript_annotations']);

};
