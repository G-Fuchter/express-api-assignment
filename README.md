# Express API Assignment

This is the repository for an API backend built with NodeJS and Express framework. The RESTful API has a single POST endpoint that fetches the data in the
provided MongoDB collection and return the results in the requested format.

This was built by Guillermo Pedro Fuchter as an assignment.

## How to install the API

1. Clone the repository or download it.
2. Execute `npm install` inside the `src` directory.

## How to run the API and Use the API

1. Create a file called `.env` inside the `src` directory.
2. Inside the `.env` file write the following:

```
MONGODB_URI:[uri]
PORT:[port]
```

> Replace `[uri]` with your URI to your Mongo DB, and replace `[port]` with the port you would like to use (if the file doesn't mention the PORT, then it will default to 3000).

3. Execute `npm start` inside the `src` directory.
4. Once the server is running, try making a POST request to the endpoint logged in the terminal (`http://localhost:3000` tends to be the default endpoint) with the following JSON body:

```json
{
  "startDate": "2016-01-01",
  "endDate": "2018-12-31",
  "minCount": 0,
  "maxCount": 20
}
```

If you get a 200 status response, then everything is working fine.

## How to run tests

Simply run the `npm test` command inside the src directory.
