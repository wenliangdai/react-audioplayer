import path from 'path';
import webpack from 'webpack';

const ROOT_DIR = path.resolve(__dirname, '..');
const config = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(ROOT_DIR, 'src'),
    historyApiFallback: true,
    hot: true,
    // inline: true,
    // progress: true,
    host: '0.0.0.0',
    port: 8080,
    publicPath: '/static/',
    stats: 'normal' // customize terminal console info
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  performance: {
    hints: false
  }
};

export default config
