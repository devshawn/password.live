const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRootPlugin = require("html-webpack-react-root-plugin")
const DefinePlugin = webpack.DefinePlugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production' ? 'development' : 'production';

module.exports = {
    mode: isDevelopment,
    devtool: "source-map",
    entry: {
        "app": [
            "@babel/polyfill",
            "./source/application/client.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "source/application"),
                // use: [
                //     {
                //         loader: require.resolve('babel-loader'),
                //         options: {
                //             plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                //         },
                //     },
                // ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                options: {
                    import: true,
                },
            },
            {
                test: /\.(jpg|png|svg|eot|otf|ttf|woff(2)?)(\?[^]*)?$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Password Generator",
            inject: "body",
            templateContent: `
                <html>
                    <body>
                        <div id="root"></div>
                    </body>
                </html>
            `
        }),
        // new ReactRootPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(isDevelopment),
            'process.env.API_URL': JSON.stringify(process.env.API_URL)
        }),
        new ReactRefreshWebpackPlugin()
    ],
    resolve: {
        fallback: { crypto: false },
    }
}
