import webpack from 'webpack';
import path from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

const config = {
  devtool: 'source-map',
  entry: {
    index: path.join(__dirname, '../src/react-audio-player.js')
  },
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: 'build/',
    filename: 'react-audio-player.js',
    sourceMapFilename: 'react-audio-player.map',
    library: 'ReactAudioPlayer',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin()
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      umd: "react"
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    'react-motion': {
      root: "ReactMotion",
      commonjs: "react-motion",
      commonjs2: "react-motion",
      amd: "react-motion",
      umd: "react-motion"
    }
  }
};

export default config
