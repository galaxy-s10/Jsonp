var express = require('express')
var url = require('url')
var app = express()

app.use('/', function (req, res) {
    var urlParse = url.parse(req.url, true)
    var cb = urlParse.query.callback
    res.end(cb + "('I am jsonp data')")
})

app.listen('3000', function () {
    console.log('running......')
})