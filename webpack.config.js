var path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        sourceMapFilename: "index.js.map",
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader', 'source-map-loader']
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    externals: {
        react: 'react',
        'react-resize-detector': 'react-resize-detector',
        lodash: 'lodash',
        classnames: 'classnames',
        'prop-types': 'prop-types',
        'chroma-js': 'chroma-js',
        d3: 'd3',
        'dom-to-image': 'dom-to-image',
        'downloadjs': 'downloadjs',
        'moment': 'moment',
        '@gisatcz/ptr-atoms': '@gisatcz/ptr-atoms',
        '@gisatcz/ptr-core': '@gisatcz/ptr-core',
        '@gisatcz/ptr-utils': '@gisatcz/ptr-utils'
    }
};