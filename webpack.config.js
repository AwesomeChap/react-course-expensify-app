const path = require('path');

module.exports = {
  entry : './src/app.js',
  output : {
      path : path.join(__dirname,'public'),
      filename : 'bundle.js'
  },
  module : {
      rules : [{
          loader : 'babel-loader',
          test : /\.js$/,
          exclude : /node_modules/
      },{
          test : /\.s?css$/,
          use : [               //use lets you use an array of loaders
              'style-loader',   //dumb the css converted to js with a styles tag
              'css-loader',     //converts css to js
              'sass-loader'
          ]
      }]
  },
  devtool : 'cheap-module-eval-source-map',
  devServer : {
      contentBase : path.join(__dirname,'public'),
      historyApiFallback : true
  }
};
