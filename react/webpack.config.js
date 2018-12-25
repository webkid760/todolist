module.exports = function(env, argv) {
    return argv.mode === 'production' ?
        require('./webpack.config.prod') :
        require('./webpack.config.dev')
}
