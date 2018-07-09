Demonstrates options for stubbing out server-side API calls so that UI/client-side tests aren't disturbing/dependent on external systems.

## Setup

Run `npm install`.

## Using

1. Run `npm start`
2. Go to http://localhost:8080

Behind the scenes, the Node app is making an API request to [OMDB](http://www.omdbapi.com) and extracting a movie title (Guardians of the Galaxy Vol 2.) from that request.

Next, via another shell, run `npm cypress:open` to launch Cypress and run tests.

## The Whole Point

When you hit the app via http://localhost:8080 the API call is made and "Guardians of the Galaxy Vol. 2" is returned. When the app is hit via Cypress, the API call is stubbed out and "Thor: Ragnarok" is substituted in as the title. If the API call is not stubbed out, the test will fail.

## Options

There are two different approaches to stubbing out the server-side call:

1. Run a second server alongside the first and point the first at the second during test runs. Have the second return fake API responses.
2. Make it so that the API client can be toggled between stubbed responses and live calls.

Both options are present in the code, though the second is enabled by default (because it's my personal preference).

The first puts the complexity in the infrastructure, while the second puts the complexity in the code. Which approach you choose may depend on what your dev team is more comfortable tweaking.
