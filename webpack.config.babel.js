import path from 'path';
import merge from 'webpack-merge';
import devConfig from './webpack.dev.config.babel';
import prodConfig from './webpack.prod.config.babel';

const CONFIG = process.env.npm_lifecycle_event === 'build' ? prodConfig : devConfig;

export default merge({
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
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
        test: /\.css$/,
        include: [ path.join(__dirname, 'src/globalStyles') ],
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [ path.join(__dirname, 'src') ],
        exclude: [ path.join(__dirname, 'src/globalStyles') ],
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap=inline'
        ]
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.scss'] },
  target: 'web'
}, CONFIG);
