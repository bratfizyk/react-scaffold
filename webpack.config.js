const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ["node_modules"],
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