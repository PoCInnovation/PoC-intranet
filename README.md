# PoC-intranet
PoC's intranet

There is 2 different part `back` and `front`

## Back
Work with an environment so don't forget to `source .envrc` or `direnv allow`

1. Launch the database

```sh
sudo docker-compose up -d --build
OR
npm run dev:db
```

2. Launch server

```sh
npm install
npm run dev
```

> It will save and migrate database

## Front

1. Launch the front
```shell script
npm i
npm start
```
