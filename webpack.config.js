process.traceDeprecation = true;
const path = require("path");
const patternslib_config = require("@patternslib/patternslib/webpack/webpack.config.js");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = async (env, argv) => {
    let config = {
        entry: {
            bundle: path.resolve(__dirname, "index.js"),
        },
    };

    config = patternslib_config(env, argv, config);
    config.output.path = path.resolve(__dirname, "dist/");

    config.plugins.push(
        new ModuleFederationPlugin({
            shared: {
                "@patternslib/patternslib": {
                    singleton: true,
                },
                "jquery": {
                    requiredVersion: dependencies.jquery,
                    singleton: true,
                },
                "underscore": {
                    version: dependencies.underscore,
                    requiredVersion: dependencies.underscore,
                    singleton: true,
                },
            },
        })
    );

    return config;
};
