module.exports =  function(grunt, config) {
    return {
        src: {
            options: {
                port: "<%= serve.src_port %>",
                hostname: "<%= serve.host %>"
            }
        },

        dist: {
            options: {
                port: "<%= serve.dist_port %>",
                hostname: "<%= serve.host %>",
                keepalive: true
            }
        }
    }
};