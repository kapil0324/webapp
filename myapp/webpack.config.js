const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports={
     entry:'./config.js',
     output:{
     	filename:'app.js',
     	path:path.resolve(__dirname,'public/javascripts')
     },
      module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
           use: [
            {
                loader: 'css-loader',
                options: {
                    // If you are having trouble with urls not resolving add this setting.
                    // See https://github.com/webpack-contrib/css-loader#url
                   // url: false,
                    minimize: true,
                    //sourceMap: true
                }
            }
            
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../stylesheeets/app.css"),
  ]

}