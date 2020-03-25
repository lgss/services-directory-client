# Services directory client

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d6cba44-f32a-4d80-80f0-5bcbb2742b0f/deploy-status)](https://app.netlify.com/sites/bucks-service-directory/deploys)

**[On the web here](https://directory.buckinghamshire.gov.uk)**

🏛 A community service directory, originally for Buckinghamshire, reused with love and appreciation by us.

It's a standard client-rendered React app that consumes data from an API.

## Prerequisites

- `node` and `npm`
- A running companion API server
- Client-side credentials for Google's geocoding and mapping APIs

## Running it locally

1. `npm i`
2. `npm run dev`

## Running it on the web

It's suitable for deployment to free static hosts, especially Netlify. It has a `netlify.toml` file, so Netlify should automatically detect the deployment command and build directory.

## Config

It looks for these environment variables:

- `REACT_APP_API_HOST`: the location of the backing API, with protocol included
- `REACT_APP_GOOGLE_CLIENT_KEY`: for using mapping functionality.
- `REACT_APP_GA_PROPERTY_ID`: for Google Analytics
