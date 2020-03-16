import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import sass from 'rollup-plugin-sass';

const env = process.env.NODE_ENV;
const pkg = require("./package.json");

const lodashExternal = [
  'lodash/indexOf',
  'lodash/get',
  'lodash/forEach',
  'lodash/isString',
  'lodash/min',
  'lodash/max',
  'lodash/set',
  'lodash/map',
  'lodash/intersection',
  'lodash/includes',
  'lodash/isArray',
  'lodash/isObject',
  'lodash/cloneDeep',
  'lodash/reverse',
  'lodash/sum',
  'lodash/forIn',
  'lodash/sortBy',
  'lodash/flatten',
  'lodash/uniqBy',
]

export default {
  input: "src/index.js",
  external: [
    'react',
    'prop-types',
    'classnames',
    'chroma-js',
    'moment',
    'd3',
    'd3-sankey',
    'react-resize-detector',
    'dom-to-image',
    'downloadjs',
    '@gisatcz/ptr-core',
    '@gisatcz/ptr-atoms',
    '@gisatcz/ptr-utils',
    '@gisatcz/ptr-locales',
    'react-rnd',
    ...lodashExternal
  ],
  output: {
    file: {
      es: pkg.module,
      cjs: pkg.main
    }[env],
    format: env,
    globals: {
      // 'lodash/random': '_.random'
    },
    exports: 'named', /** Disable warning for default imports */
    sourcemap: true,
  },
  plugins: [
    babel({
      plugins: ["lodash"],
    }),
    commonjs({
        include: 'node_modules/**',
    }),
    sass({
      output: true,
    }),
    filesize(),
  ]
};