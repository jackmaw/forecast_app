/* Usage
webpack
webpack -w //watch
webpack -p //add minification on top of other transformations
webpack-dev-server run localserver and every time we refresh page its rerender all
*/

//take index.html and put  it into /dist directory
//and add production JS(dist/index_bunde.js) file into it
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig  = new HtmlWebpackPlugin({
  //what file to use as a template
  template: __dirname + '/app/index.html',
  //output file name
  filename: 'index.html',
  //where inject 'body' or 'head'
  injext: 'body'

});

module.exports = {
  //entry point of our Application
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  //where to put files that webpack creates for us
  output: {
    path: __dirname + '/dist',
    //name of final file
    filename: "index_bundle.js"
  },
  //basically transformations on files
  module: {
    //each transformation is represented as a loaders array element
    //each loader contains:
    //regex test, which files we want to transform
    //regex exclude, which files, folders ignore transformation
    //loader - name of transformation
    loaders: [
      //babel-loader: jsx -> js (setup in .babelrc -> preset-react)
      {test: /\.js$/, exclude: /nodue_modules/, loader: "babel-loader"},
      //Enable loading css as js model in our components
      {test: /\.css$/,  loader: "style-loader!css-loader"}
    ]
  },
  //additional operations - more than just a transformation
  plugins: [HtmlWebpackPluginConfig]
};
