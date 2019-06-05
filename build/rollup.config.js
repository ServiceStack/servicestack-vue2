// rollup.config.js
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
import typescript from 'rollup-plugin-typescript2';

const argv = minimist(process.argv.slice(2));

const baseConfig = {
  input: 'src/index.ts',
  plugins: {
    preVue: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      typescript({ objectHashIgnoreUnknownHack: true }),
      commonjs(),
    ],
    vue: {
      css: true,
      template: {
        isProduction: true,
      },
    },
    postVue: [
      buble(),
    ],
  },
};

// UMD/IIFE shared settings: externals and output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
];
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vue-class-component': 'VueClassComponent',
  'vue-property-decorator': 'window["vue-property-decorator"]',
  '@servicestack/client': 'window["@servicestack/client"]',
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    output: {
      file: 'dist/index.js',
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      terser({
        output: {
          ecma: 6,
        },
      }),
    ],
  };
  buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'iife') {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/servicestack-vue.umd.js',
      format: 'iife',
      name: 'ServiceStackVue',
      exports: 'named',
      globals,
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      terser({
        output: {
          ecma: 5,
        },
      }),
    ],
  };
  buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
