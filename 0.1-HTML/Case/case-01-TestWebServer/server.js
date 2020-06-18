var express = require("express");

var app = new express();

app.use(express.static("./pages"));

app.listen(12306);              // 端口号: 建议 num > 8000 || num = 80( default )


/**
 * 浏览器默认访问 80 端口
 *
 * express 默认访问 index.html
 */