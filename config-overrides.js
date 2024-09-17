const path = require("path")
const webpack = require("webpack")

module.exports = function override(config, env) {
    // Add custom Webpack configurations here
    config.resolve.fallback = {
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        util: require.resolve("util/"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        url: require.resolve("url/"),
        assert: require.resolve("assert/"),
        crypto: require.resolve("crypto-browserify"),
    }

    return config
}
