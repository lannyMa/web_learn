var http = require('http'),
    url = require('url'),
    fs = require('fs');


s1 = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true),
        pathname = urlObj['pathname'],
        query = urlObj['query'];

    var reg = /\.(html|css|js|json|ico)/i;
    if (reg.test(pathname)) {

        var suffix = reg.exec(pathname)[1].toUpperCase();
        var suffixMIME = 'text/plain';
        switch (suffix) {
            case "html":
                suffixMIME = 'text/html';
                break;
            case "css":
                suffixMIME = 'text/css';
                break;
            case "js":
                suffixMIME = 'text/javascript';
                break;
            case "ico":
                suffixMIME = 'application/octet-stream';
                break;
            case "json":
                suffixMIME = 'application/json';
                break;
        }
        try {
            var fileCon = fs.readFileSync("." + pathname, "utf8");
            res.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8'});
            res.end(fileCon);
        } catch (e) {
            res.end("file is not found");
        }
        return;
    }

    var con = null,
        customPath = "./json/custom.json",
        result = null;

    con = fs.readFileSync(customPath, 'utf8');
    con.length === 0 ? con = '[]' : null; //防止用户json文件为空
    con = JSON.parse(con);
    if (pathname === "/getlist") {
        result = {
            code: 1,
            msg: "没有用户",
            data: null
        };

        if (con.length > 0) {
            result = {
                code: 0,
                msg: "返回用户列表成功",
                data: con
            }
        }
        try {
            res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
            res.end(JSON.stringify(result));
        } catch (e) {
            res.end("file is not found");
        }
        return;
    }

    if (pathname === "/getinfo") {
        var customId = query['id'];

        result = {
            code: 1,
            msg: "用户不存在",
            data: null
        };
        for (var i = 0; i < con.length; i++) {
            console.log(customId);
            if (con[i]["id"] == customId) {
                result = {
                    code: 0,
                    msg: "返回用户列表成功",
                    data: con[i]
                };
                break;
            }
        }
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        res.end(JSON.stringify(result));
        return;
    }

    if (pathname === "/removeinfo") {
        var customId = query['id'];
        result = {
            code: 1,
            msg: "用户不存在"
        };
        for (var i = 0; i < con.length; i++) {
            if (con[i]["id"] == customId) {
                con.splice(i, 1);
                fs.writeFileSync(customPath, JSON.stringify(con));
                result = {
                    code: 0,
                    msg: "删除成功"
                };
                break;
            }
        }
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        res.end(JSON.stringify(result));
        return;
    }
});
s1.listen(12345, function () {
    console.log('http://127.0.0.1:12345/index.html');
});