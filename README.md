# Projeto para Warmup e Ideias com Cypress

## Pre-Req
[Docker](https://docs.docker.com/get-docker/)

## Running

### Build Docker Image
`docker build --no-cache -t cypress-image .`

### Running Tests
`docker run -it -v $PWD:/app --env NODE_ENV=prod cypress-image npm run cypress`