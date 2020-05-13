var express = require('express')
var url = require('url')
var app = express()


app.use('/login', function (req, res) {
    var urlParse = url.parse(req.url, true)
    console.log(urlParse);
    var cb = urlParse.query.callback
    var name = urlParse.query.name
    var pwd = urlParse.query.pwd
    if (name == 'admin' && pwd == 123456) {
        const info = { name: '张三', age: 19 }
        console.log(JSON.stringify(info));
        var jsondata = cb + "('" + JSON.stringify(info) + "')"
        console.log(jsondata);
        // setTimeout(() => {
        res.end(jsondata)
        // }, 2000);
    }

})
app.use('/ajax', function (req, res) {
    var urlParse = url.parse(req.url, true)
    console.log(urlParse);
    var cb = urlParse.query.cbName
    // setTimeout(() => {
    res.end(cb + "('我是ajaxjsonp返回的数据')")
    // }, 2000);

})
app.use('/', function (req, res) {
    var urlParse = url.parse(req.url, true)
    console.log(urlParse);
    var cb = urlParse.query.callback
    // setTimeout(() => {
    res.end(cb + "('我是原生jsonp返回的数据')")
    // }, 3000);

})

app.listen('3000', function () {
    console.log('running......')
})