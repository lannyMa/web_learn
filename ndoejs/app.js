var http = require("http"),
    url = require("url"),
    fs = require("fs");


s1 = http.createServer(function (req, res) {
    // res.write("<h1>hello yifei</h1>");
    // res.end();
    var urlObj = url.parse(req.url, true),
        pathname = urlObj['pathname'],
        query = urlObj['query'];
    console.log(pathname);
    console.log(query);
    res.end();
});


s1.listen(1234, function () {
    console.log("http://127.0.0.1:1234");
});