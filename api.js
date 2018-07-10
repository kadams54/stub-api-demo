const http = require('http')
const fs = require('fs')
const apiUrl = process.env.API_URL

const fetchMovie = (id, callback) => {
  if (process.env.TEST_API) {
    const db = JSON.parse(fs.readFileSync('db.json', 'utf8'))
    const movie = db.movies.find(m => m.i === id)
    callback(movie)
  } else {
    http.get(apiUrl + id, res => {
      res.setEncoding('utf8')
      const bodyChunks = []
      res.on('data', chunk => bodyChunks.push(chunk))
      res.on('end', () => {
        callback(JSON.parse(bodyChunks.join('')))
      })
    })
  }
}

module.exports = {
  fetchMovie
}
