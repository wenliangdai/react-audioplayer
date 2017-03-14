import path from 'path';
import merge from 'webpack-merge';
import devConfig from './webpack.dev.config.babel';
import prodConfig from './webpack.prod.config.babel';

const CONFIG = process.env.npm_lifecycle_event === 'build' ? prodConfig : devConfig;
const ROOT_DIR = path.resolve(__dirname, '..');

export default merge({
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(ROOT_DIR, 'src/index.jsx')
  ],
  output: {
    path: path.join(ROOT_DIR, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    library: 'reactAudioplayer',
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
        include: [ path.join(ROOT_DIR, 'src') ],
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader?sourceMap=inline'
        ]
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.css'] },
  context: path.resolve(__dirname, 'src'),
  target: 'web'
}, CONFIG);
