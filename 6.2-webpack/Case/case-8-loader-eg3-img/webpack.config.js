module.exports = {

    mode: "development",

    module: {

        rules: [

            {
                test: /\.(png)|(jpg)|(gif)|(svg)/g,
                use: ['./loaders/img-loader.js']
            }
        ]
    },

    devtool: "source-map"
};