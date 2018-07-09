/*jslint node:true*/

'use strict';

var http = require('http'),
    server = http.createServer(),
    API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8590cb60';

server.on('request', function (req, res) {
    var movie = {'Title': 'Howard the Duck'};
    http.get(API_URL, apiRes => {
        apiRes.setEncoding('utf8');
        var bodyChunks = [];
        apiRes.on('data', chunk => bodyChunks.push(chunk));
        apiRes.on('end', () => {
            movie = JSON.parse(bodyChunks.join(''));
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end('<html><body><h1>The best movie ever is ' + movie.Title + '.</h1></body></html>');
        });
    })
});

server.listen(8080, 'localhost');
console.log("Server listening");