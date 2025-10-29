import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Usamos templateContent para leer el index.html fuente (sin modificarlo)
      // y reemplazar únicamente la etiqueta que apunta a index.js por la ruta
      // real del bundle que genera webpack. De este modo el archivo fuente
      // puede seguir apuntando a index.js para uso local en desarrollo.
      templateContent: ({ htmlWebpackPlugin }) => {
        const raw = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
        // Reemplazamos la primera ocurrencia de <script src="index.js" ...></script>
        // por el script que provee HtmlWebpackPlugin. Usamos inject: false
        // para evitar que el plugin añada otra etiqueta.
        return raw.replace(/<script\s+src=["']index\.js["'][^>]*><\/script>/i, '<script src="<%= htmlWebpackPlugin.files.js[0] %>"></script>');
      },
      inject: false
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3001,
    hot: true,
    open: true,
  },
};
