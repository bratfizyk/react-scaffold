const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: `
                <body>
                    <div id="root"></div>
                </body>
            `
        }),
    ],
};