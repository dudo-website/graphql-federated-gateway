# GraphQL Federated Gateway

Federated graphQL super-graph.

## Setup

This service makes heavy use of docker and docker compose. Setting up docker is beyond the scope of this readme.

```shell
mkdir ~/projects/dudo-website
cd ~/projects/dudo-website
git clone git@github.com:dudo-website/graphql-federated-gateway.git
cd ~/projects/dudo-website/graphql-federated-gateway

docker compose up -d
```

## Deployment

This should be done for you via CI/CD, but in case you need to manually push an image

```shell
docker build -t docker.pkg.github.com/dudo-website/graphql-federated-gateway/graphql-federated-gateway:0.1.0
docker push docker.pkg.github.com/dudo-website/graphql-federated-gateway/graphql-federated-gateway:0.1.0
```

## Reading

Learn about the various tech powering this application:

- [GraphQL](https://graphql.org)
- [GraphQL Federation](https://www.apollographql.com/docs/federation)
- [Docker](https://docs.docker.com/compose/gettingstarted)
