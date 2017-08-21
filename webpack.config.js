var webpack = require("webpack");
var path= require("path");

//copy everything which has been prepared for serving it into the dist folder which will be created automatically
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

//this js object will be exported. Webpack will pull this object and read it and confgure it. 

//entry file will tell webpack which file should it start with
//output tell where to provide the output
//public path: imp for webpack dev server, we will be putting everything on dist. But on real server we will deploy the dist folder.
//we have to tell the webpack wat will be the public server on the real server. 

//If we dont need to compile or change, modules is not needed

//test contains whihc files to test or look related the loader(babel)

//regex: ? have a look at all js files, include has files to be scanned for just files.


var config={
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    
    modules: {
        loaders:[
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader:"babel-loader",
                query:{
                    presets:["react", "es2015", "stage-2"] 
                }
            }
        ]
    }
};

module.exports= config;