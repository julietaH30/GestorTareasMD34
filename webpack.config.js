const path = require('path');

module.exports ={
    mode: 'development', 
    entry: './src/index.js', //punto de entrada de la app// 
output:{
    filename: 'bundle.js' , //files name 
    path: path.resolve(__dirname, 'dist'), //carpeta de salida //
},
module:{
     rules: [
        {
            test:/\.css$/, // regex para identificar archivos css
        use:['style-loader', 'css-loader'], // loader son para procesar archivos de estilo
        },
        {
            test:/\.js$/, //regex para indentificar archivos JS
        exclude: /node_modules/, 
        use:{
            loader: 'babel-loader', //loader par pasar old JS a modernos
        options:{
            presets:['@babel/preset-env'],
        },
        },
        },
     ],
},
devtool:'source-map', // es para generar source maps para facilitar la depuracion
devServer:{
   static:{
    directory:path.resolve(__dirname, 'dist'),
   },
    compress: true, //habilita la compresion zip //
    port: 9000, //puerto del servidor de desarroollo 
},
};
