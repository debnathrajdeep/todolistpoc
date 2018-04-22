//import webpack from "webpack";
var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    mode:"development",
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/src",
        filename: "bundle.js",
        publicPath : "/src/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2017", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;
