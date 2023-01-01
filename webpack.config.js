const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
console.log(`Webpack building in ${mode} mode`);
module.exports = {    
  mode,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },  
  plugins: [
    new ESLintPlugin({
      fix: true
    })
  ]
}