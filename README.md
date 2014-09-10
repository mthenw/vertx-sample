# vertx-sample

This is a barebones Vert.x app for Heroku.

## Running locally

```
git clone git@github.com:mthenw/vertx-sample.git # or clone your own fork
cd vertx-sample
foreman start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/mthenw/vertx-sample)

or manually

```
heroku create --buildpack https://github.com/mthenw/heroku-buildpack-vertx.git
git push heroku master
heroku open
```

## Vert.x buildpack

This sample can be run only on Heroku app with [Heroku Vert.x buildpack](https://github.com/mthenw/heroku-buildpack-vertx).
