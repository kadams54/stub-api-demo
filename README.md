# Stub API Demo

This demo looks at two options for stubbing server-side API requests when running client-side tests:

1. Running a fake API server.
1. Toggling the API client to serve up a fake response.

Both options have their pros and cons and they are not the only options, so choose what works best for your team.

## Setup

Run `npm install`.

## Running

1. Run the app: `npm start`.
1. Go to http://localhost:8080 - note that it declares _Guardians of the Galaxy Vol. 2_ to be the best.

Behind the scenes, the Node app is making an API request to [OMDB](http://www.omdbapi.com) and extracting a movie title (_Guardians of the Galaxy Vol. 2_) from that request.

### Asserting the API is Stubbed

The demo includes a client-side test ([demo.spec.js](https://github.com/kadams54/stub-api-demo/blob/master/demo.spec.js)) that runs in [Cypress](https://cypress.io/); that test's assertion will only pass if the movie data is taken from a local source and not the live API. Consequently we can run the test to prove that we're not using the live API. If you run it without doing either of the approaches below, it will fail as the default is to use the live API:

1. In another terminal, run `npm test` and watch it fail.
1. Feel free to stop the app.

### Running a Fake API Server

We'll use [json-server](https://github.com/typicode/json-server/) to run a fake API server with data from the [db.json](https://github.com/kadams54/stub-api-demo/blob/master/db.json) file. We point our app at the fake API server by overriding the `API_URL` environment variable on startup:

1. Run the fake API: `npm run-script api`.
1. In another terminal, run the app: `API_URL=http://localhost:3000/movies/ npm start`.
1. Go to http://localhost:8080 - note that it now declares _Thor: Ragnarok_ to be the best.
1. Run `npm test` to verify the stubbed API works.
1. Feel free to stop everything.

### Toggling the API Client

The api client is in, appropriately enough, [api.js](https://github.com/kadams54/stub-api-demo/blob/master/api.js). The `fetchMovie` method checks the `TEST_API` environment variable to determine if it should make an HTTP request to the live API or return fake data in the local `db.json`:

1. Run the app: `TEST_API=true npm start`.
1. Go to http://localhost:8080 - note that it declares _Thor: Ragnarok_ to be the best.
1. Run `npm test` to verify the stubbed API works.
1. Feel free to stop the app.

## Note

Normally the `.env` file would not be checked into version control; however, it is here because 1) there is no sensitive information in it, 2) it makes running the demo just a little simpler, and 3) the values defined in the `.env` file are an important part of demonstrating how to setup API stubbing.