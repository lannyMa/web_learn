var http = require("http"),
    url = require("url"),
    fs = require("fs");


s1 = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url),
        pathname = urlObj['pathname'],
        query = urlObj['query'];

    pathname = "." + pathname;
    var con = fs.readFileSync(pathname);
    res.end(con);
    return;
});

s1.listen(1234, function () {
    console.log("http://127.0.0.1:1234/index.html")
});