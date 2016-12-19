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
  entry: ['whatwg-fetch', path.join(PATHS.src, 'index.jsx')],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/globalStyles'),
        loaders: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap=true&sourceMapContents=true'
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/globalStyles'),
        loaders: 'style!css-loader!sass?sourceMap=true&sourceMapContents=true'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};

if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
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
      new webpack.optimize.OccurrenceOrderPlugin(),
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
    ]
  });
}
