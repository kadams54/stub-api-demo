/*jslint node:true*/

'use strict';

require('dotenv').config()

const http = require('http')
const api = require('./api')

const server = http.createServer()

server.on('request', function (req, res) {
  api.fetchMovie('tt3896198', movie => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(`<html><body><h1>The best movie ever is ${movie.Title}.</h1></body></html>`);
  })
})

server.listen(8080, 'localhost')
console.log('Server listening')
