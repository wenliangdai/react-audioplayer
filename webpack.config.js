var path         = require('path'),
    webpack      = require('webpack'),
    merge        = require('webpack-merge'),
    autoprefixer = require('autoprefixer');

var TARGET = process.env.npm_lifecycle_event || 'start';
var PORT = process.env.npm_package_config_port;
var env = process.env.NODE_ENV;
var PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

var common = {
  entry: [path.join(PATHS.src, 'index.jsx')],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/static/',
    library: 'reactAudio',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, 'src/globalStyles')
        ],
        loaders: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?sourceMap=true&sourceMapContents=true'
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src/globalStyles')
        ],
        loaders: 'style-loader!css-loader!sass-loader?sourceMap=true&sourceMapContents=true'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  target: 'web'
};
// module.exports = common;
if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      contentBase: PATHS.src,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      host: '0.0.0.0',
      port: PORT,
      stats: { colors: true }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
    externals: {
      react: { // UMD
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "React"
      },
      lodash: {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_"
      }
    }
  });
}
