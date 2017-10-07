const path = require("path")

module.exports = {
    devtool: "source-map",
    entry: {
        "app": [
            "babel-polyfill",
            "react-hot-loader/patch",
            "./client"
        ]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|svg|eot|otf|ttf|woff(2)?)(\?[^]*)?$/,
                loader: "file-loader"
            }
        ]
    }
}
