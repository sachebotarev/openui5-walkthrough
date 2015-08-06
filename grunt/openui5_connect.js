module.exports =  function(grunt, config) {
    return {
        options: {
            resources: [
                "<%= dir.bower_components %>/openui5-sap.ui.core/resources",
                "<%= dir.bower_components %>/openui5-sap.m/resources",
                "<%= dir.bower_components %>/openui5-sap.ui.layout/resources",
                "<%= dir.bower_components %>/openui5-themelib_sap_bluecrystal/resources"
            ],
            proxypath: 'proxy',
            cors: {
                origin: "*"
            }
        },
        src: {
            options: {
                appresources: "<%= dir.src %>"
            }
        },
        dist: {
            options: {
                appresources: "<%= dir.dist %>"
            }
        }
    }
};