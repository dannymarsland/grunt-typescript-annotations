/*
 * grunt-concat-dependencies
 * https://github.com/nelsonnogueira/concat-dependencies
 *
 * Copyright (c) 2014 nnogueira@etecture.co.uk
 * Licensed under the MIT license.
 */

'use strict';

var nodePath = require('path');
var Annotations = require('typescript-annotations');

module.exports = function(grunt) {

    grunt.registerMultiTask('typescript_annotations', 'Creates annotations file for TypeScriptAnnotations', function() {

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            punctuation: ';',
            production: false
        });
        var entryPoint = nodePath.normalize(this.data.input);
        var done = this.async();

        var outPath = nodePath.normalize(this.data.output);
        Annotations.getApplicationAnnotations(entryPoint, function (applicationAnnotations) {
            if (applicationAnnotations) {
                Annotations.writeAnnotationsToFile(outPath, applicationAnnotations.getClassAnnotations(), true);
                done();
            } else {
                done('An error must have occured');
            }
        });


    });

};