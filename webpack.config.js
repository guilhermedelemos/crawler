const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    library: 'crawler',
    filename: 'crawler.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: "web",
};