import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import dtsBundle from 'rollup-plugin-dts-bundle';
import json from '@rollup/plugin-json';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const currentWorkingPath = process.cwd();

const { src, declarationTypes, exportsType, name, types } = require(path.join(
  currentWorkingPath,
  'package.json'
));

const inputPath = path.join(currentWorkingPath, src);
const exports = exportsType || 'named';

let rollupProcesses = [
  {
    input: inputPath,
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true, exports },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        exports,
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      peerDepsExternal(),
      resolve(),
      commonjs(),

      typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
      }),
      dtsBundle({
        bundle: {
          name,
          main: declarationTypes,
          out: path.join(currentWorkingPath, types),
        },
        deleteOnComplete: ['declarationTypes'],
      }),

      babel({
        presets: ['@babel/preset-env', '@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
      typescriptPaths(),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css', '.scss'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),

      terser(),
      json()
    ],
    external: ['react', 'react-dom'],
  },
];

export default rollupProcesses;
/**
 * Added this comment to know exactly when was the time when we last built a package
 * during the process of a task
 */
console.log(`✨ Built on ${new Date().toString()}`);
