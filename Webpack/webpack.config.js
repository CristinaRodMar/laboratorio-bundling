import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

    export default {
    mode: "development",
    entry: {
        app: "./src/index.jsx",
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/[name][hash][ext]",
        clean: true,
    },

    module: {
        rules: [
        {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
        },
        {
        test: /\.html$/,
        loader: "html-loader",
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        }),
    ],

    devServer: {
        static: path.join(__dirname, "dist"),
        port: 8080,
        open: true,
        hot: true,
    },
};