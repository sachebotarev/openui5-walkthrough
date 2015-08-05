module.exports =  function(grunt, config) {
    return {
        webapp: {
            options: {
                port: '<%= serve.dev_port %>',
                hostname: '<%= serve.host %>'
            }
        },

        dist: {
            options: {
                port: '<%= serve.prod_port %>',
                hostname: '<%= serve.host %>',
                keepalive: true
            }
        }
    }
};