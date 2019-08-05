const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');
require('css-modules-require-hook')({
  generateScopedName: '[path][name]__[local]__[hash:base64:5]',
  extensions: ['.scss', '.css'],
  camelCase: true
});
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module : {
    rules : [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&minetype=image/png'
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      },
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
       }
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'node_modules/wix-animations'),
          path.join(__dirname, 'node_modules/wix-style-react'),
          path.join(__dirname, 'node_modules/bootstrap-sass') // only if you use Grid component
        ],
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&camelCase&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ]
      },
      {
        test: /(?<!\.st)\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader'
      }
    ],
  },
  // loaders: [
  //   {
  //     test: /\.scss$/,
  //     include: [
  //       path.join(__dirname, 'node_modules/wix-animations'),
  //       path.join(__dirname, 'node_modules/wix-style-react'),
  //       path.join(__dirname, 'node_modules/bootstrap-sass') // only if you use Grid component
  //     ],
  //     loaders: [
  //       'style-loader',
  //       'css-loader?modules&importLoaders=1&camelCase&localIdentName=[name]__[local]___[hash:base64:5]',
  //       'sass-loader'
  //     ]
  //   },
  //   {
  //     test: /(?<!\.st)\.css$/,
  //     loaders: [
  //       'style-loader',
  //       'css-loader'
  //     ]
  //   },
  //   {
  //     test: /\.(png|jpg|jpeg|gif|svg)$/,
  //     loader: 'file-loader'
  //   }
  // ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};