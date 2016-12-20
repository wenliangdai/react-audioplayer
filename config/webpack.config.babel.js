import path from 'path';
import merge from 'webpack-merge';
import devConfig from './webpack.dev.config.babel';
import prodConfig from './webpack.prod.config.babel';

const CONFIG = process.env.npm_lifecycle_event === 'build' ? prodConfig : devConfig;
const ROOT_DIR = path.resolve(__dirname, '..');

export default merge({
  entry: path.join(ROOT_DIR, 'src/index.jsx'),
  output: {
    path: path.join(ROOT_DIR, 'dist'),
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
        include: [ path.join(ROOT_DIR, 'src/globalStyles') ],
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [ path.join(ROOT_DIR, 'src') ],
        exclude: [ path.join(ROOT_DIR, 'src/globalStyles') ],
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
