/*jslint node:true*/

'use strict';

require('dotenv').config()

var http = require('http'),
    server = http.createServer(),
    movie = {'Title': '[MOVIE TITLE PLACEHOLDER]'},
    apiUrl = process.env.API_URL;

server.on('request', function (req, res) {
    http.get(apiUrl, apiRes => {
        apiRes.setEncoding('utf8');
        var bodyChunks = [];
        apiRes.on('data', chunk => bodyChunks.push(chunk));
        apiRes.on('end', () => {
            movie = JSON.parse(bodyChunks.join(''));
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(`<html><body><h1>The best movie ever is ${movie.Title}.</h1></body></html>`);
        });
    })
});

server.listen(8080, 'localhost');
console.log('Server listening');