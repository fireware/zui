import Path from 'path';
import fs from 'fs-extra';
import {defineConfig, mergeConfig, UserConfig, PluginOption, LibraryOptions} from 'vite';
import minimist from 'minimist';
import eslint from 'vite-plugin-eslint';
import css from 'rollup-plugin-css-only';
import configDevServer from './tools/config-dev-server';

export default defineConfig(async ({command, mode, ssrBuild}) => {
    let viteConfig: UserConfig = {
        build: {
            outDir: 'dist/dev',
        },
    };

    const {config: configFile} = minimist(process.argv.slice(4));
    if (configFile) {
        const configFromFile = Path.isAbsolute(configFile) ? configFile : Path.resolve(__dirname, configFile);
        const extraBuildConfig = await fs.readJSON(configFromFile);
        viteConfig = mergeConfig(viteConfig, extraBuildConfig);
    }

    viteConfig = mergeConfig(viteConfig, {
        plugins: [
            eslint(),
            css({output: `${(viteConfig.build?.lib as LibraryOptions)?.fileName ?? 'style'}.css`}) as PluginOption,
            ...(mode === 'development' ? [
                configDevServer({
                    rootPath: __dirname,
                }),
            ] : []),
        ],
    });

    return viteConfig;
});
