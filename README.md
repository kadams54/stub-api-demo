Demonstrates options for stubbing out server-side API calls so that UI/client-side tests aren't disturbing/dependent on external systems.

## Setup

Run `npm install`.

## Using

1. Run the app: `npm start`.
1. Go to http://localhost:8080 - note that it declares _Guardians of the Galaxy Vol. 2_ to be the best.

Behind the scenes, the Node app is making an API request to [OMDB](http://www.omdbapi.com) and extracting a movie title (_Guardians of the Galaxy Vol. 2_) from that request.

Now we'll start up the API, restart the app and point it to the fake API:

1. Run the fake API: `npm run-script api`.
1. In another terminal, run the app: `API_URL=http://localhost:3000/movies/tt3896198 npm start`. Setting the `API_URL` env var will point the app to the fake API.
1. Go to http://localhost:8080 - note that it now declares _Thor: Ragnarok_ to be the best.

The app is now pointed at the fake API provided by [json-server](https://github.com/typicode/json-server/), which is serving up JSON data defined in the [db.json](https://github.com/kadams54/stub-api-demo/blob/master/db.json) file.

Finally, via a third terminal, run `npm test` to launch Cypress and run tests. The test asserts for the data provided by the fake API, so if the app is connected to the real API (or no API at all) the test will fail. If it passes, we know it is hitting the fake API.

## Note

Normally the `.env` file would not be checked into version control; however, it is here because 1) there is no sensitive information in it and 2) it makes running the demo just a little simpler.