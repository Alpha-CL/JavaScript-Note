/**
 * path             // node 内置模块，用于处理路径
 *
 * path.resolve();
 */

let path = require('path');

module.exports = {

    mode: "development",

    entry: {

        main: './src/index.js'                              // key: moduleName; value: modulePath;
    },

    output: {

        path: path.resolve(__dirname, 'test'),              // 必须是绝对路径，表示设置导出资源的存放位置
                                                            // 默认 ./dist/

        filename: "script/target/test.js"                   // 静态设置资源导出的路径规则
    }
};





