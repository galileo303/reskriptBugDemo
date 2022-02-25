const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');
const src = path.join(__dirname, 'src');

const {
    default: workspaceNoBuild,
} = require('@reskript/plugin-workspace-no-build');
const {default: sass} = require('@reskript/plugin-sass');

exports.plugins = [
    workspaceNoBuild({}),
    sass({}),
];
exports.build = {
    reportLintErrors: false,
    appTitle: 'app',
    style: {
        modules: resource => resource.includes(src) && !resource.endsWith('.css'),
    },
    finalize: webpackConfig => {

        webpackConfig.plugins.push(new ExternalTemplateRemotesPlugin());
        webpackConfig.experiments = {};
        webpackConfig.experiments.topLevelAwait = true;
        return webpackConfig;
    },
};

exports.devServer = {
    port: 8099,
    hot: true,
};
