
import path from 'path';
import {fileURLToPath} from 'url';
// @ts-expect-error
import ExternalTemplateRemotesPlugin from 'external-remotes-plugin';
import {configure} from '@reskript/settings';
import workspaceNoBuild from '@reskript/plugin-workspace-no-build';
import sass from '@reskript/plugin-sass';

console.log(import.meta.url);
const src = path.join(path.dirname(fileURLToPath(import.meta.url)), 'src');

export default configure(
    'webpack',
    {
        build: {
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
            }
        },
        devServer: {
            port: 8099,
            hot: true,
        },
        plugins: [
            workspaceNoBuild(),
            sass(),
        ]
    }
);
