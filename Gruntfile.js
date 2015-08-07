'use strict';

module.exports = function(grunt) {

    var path = require('path');
    require('time-grunt')(grunt);


    var gruntData = {
        project: {
            prefix: "sap/ui/demo/wt"
        },
        dir: {
            bower_components: 'bower_components',
            src: 'webapp',
            dist: 'dist'
        },
        serve: {
            host: '127.0.0.1',
            src_port: '8080',
            dist_port: '8090'
        }
    };

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        jitGrunt: {
            staticMappings:{
                'openui5_connect': 'grunt-openui5',
                'openui5_theme': 'grunt-openui5',
                'openui5_preload': 'grunt-openui5'
            }
        },
        data: gruntData
    });
};