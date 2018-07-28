/**
 * Created by hustcxy on 2017/4/23.
 */
var debug=process.env.NODE_ENV!=="production";
var path=require('path');
var webpack=require('webpack');


module.exports={
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './app/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },

    module:{
        loaders:[{
            test:/\.js$/,
            exclude: /(node_modules)/,
            loader:"babel-loader",
            include:path.resolve(__dirname, "src"),
            query:{
                presets:["es2015","react"],
            }
            },

            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: __dirname
            },

            {
                test:/\.html$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{

                            name:'[name].[ext]'
                        }
                    }
                ]
            }

        ]
    }
};
