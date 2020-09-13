# PoC-intranet
PoC's intranet

There is 2 different part `back` and `front`

## Back
Work with an environment so don't forget to `source .envrc` or `direnv allow`

### Getting started

**Launch the database**

```sh
sudo docker-compose up -d --build
OR
npm run dev:db
```

Don't forget to allow env with `direnv allow` or `source .envrc`

**Launch server**

```sh
npm install
npm run dev
```

> It will save and migrate database

### Features

Todo

## Front

### Getting started

1. Launch the front
```shell script
npm install
npm start
```
