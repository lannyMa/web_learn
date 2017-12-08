var http = require('http'),
    url = require('url'),
    fs = require('fs');


s1 = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url,true),
        pathname = urlObj['pathname'],
        query = urlObj['query'];
    var reg = /\.(HTML|CSS|JS|JSON|TXT|ICO)/i;
    if (reg.test(pathname)) {
        var suffix = reg.exec(pathname)[1].toUpperCase();
        var suffixMIME = null;
        switch (suffix) {
            case "HTML":
                suffixMIME = 'text/html';
                break;
            case "JS":
                suffixMIME = 'text/javascript';
                break;
            case "CSS":
                suffixMIME = 'text/css';
                break;
            case "JSON":
                suffixMIME = 'application/json';
                break;
            case "ICO":
                suffixMIME = 'application/octet-stream';
                break;
        }


        try {
            con = fs.readFileSync('.' + pathname);
            res.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8'});
            res.end(con);
        } catch (e) {
            res.writeHead(404, {'content-type': 'text/plain;charset=utf-8'});
            res.end("file not found")
        }
    }

    if (pathname === "/getall") {
        var fnName = query["cb"];
        con = fs.readFileSync('./data.txt', 'utf-8');
        con = 'a,b';
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8'});
        res.end(fnName + '(' + con + ',22)');
    }
});

s1.listen(1234, function () {
    console.log("http://127.0.0.1:1234/getall?cb=maotai");
});
