const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        main: __dirname + '/src/resources/js/main.js'
    },
    output: {
        path: __dirname + '/src/public/assets/js',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test:  /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/[name].css",

        }),
        new VueLoaderPlugin()
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' 
      }
    }
}