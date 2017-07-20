module.exports = {
  context: __dirname,
  entry: {
    js: "./src/index.js",
    css: "./src/main.css",
    html: "./src/index.html",
  },

  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg" },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  },
};
