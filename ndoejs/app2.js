var http = require('http'),
    url = require('url'),
    fs = require('fs');


s1 = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true),
        pathname = urlObj['pathname'],
        query = urlObj['query'];
    console.log(pathname, query);
    if (pathname === "/index.html") {
        var con = fs.readFileSync("./index.html");
        res.end(con);
        return;
    }
    if (pathname === "/css/base.css") {
        con = fs.readFileSync("./css/base.css","utf-8");
        res.end(con);
        return;
    }
});

s1.listen("1234", function () {
    console.log("http://127.0.0.1:1234/index.html");
});