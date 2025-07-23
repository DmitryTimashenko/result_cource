import styles from 'rollup-plugin-styles';
import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        styles({
            mode: 'extract',
            sourceMap: true,
            minimize: true
        }),
        image(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
        }),
        serve({
            open: true,
            contentBase: '.',
            port: 3000
        }),
        livereload('dist')
    ]
};