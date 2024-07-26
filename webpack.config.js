const path = require('path');

module.exports = {
    entry: './src/index.js', // punto de entrada de nuesta app (archivo principal)
    output: {
        filename: 'bundule.js', // Nombre del archivo d salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules:[
            {
                test: /\.css$/, // Regex para identificar archivos css
                use: ['style-loader', 'css-loader'], //loaders para procesar archivos css        
            },
            {
                test: /\.js$/, // regex para identificar archivos js
                exclude: /node_modules/, //excluir la carpeta de node_modules
                use: {
                    loader: 'babel-loader',   // loader para pasar JS moderno a JS antiguo
                    options: {
                        presets: [ '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'sourse-map', //generar  source para faciliar depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //carpeta principal del servidor
        compress: true, //habilitar la compresion gzip
        port: 9000, //puerto del servidor de desarollo
    }
}
