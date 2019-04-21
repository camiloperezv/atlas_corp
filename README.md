# atlas corp DNS
[![Codeship Status for camiloperezv/atlas_corp](https://app.codeship.com/projects/a9c3bb70-4606-0137-ee9c-724e167eb18c/status?branch=master)](https://app.codeship.com/projects/337222)
[![codecov](https://codecov.io/gh/camiloperezv/atlas_corp/branch/master/graph/badge.svg)](https://codecov.io/gh/camiloperezv/atlas_corp)
[![Maintainability](https://api.codeclimate.com/v1/badges/709fb3778b2ea2079f24/maintainability)](https://codeclimate.com/github/camiloperezv/atlas_corp/maintainability)

This systems is able, after a complex math process, return Drones the information they need to report, wherever they are at the galaxy.

This project runs over HTTP, but, we are in process to implement a cryptographic system which installs certificates on our drones to trust our servers and validate authenthicity. Wait for it :)

# Development

To run this project on development you could use some tools like nodemon, if you don't have it, you could use node bin/www

# Testing 
To run all tests you should run :

`$ yarn run test` 

All tesgin files are in `/test` folder.

# Documentation

The Api documentations is in `swagger.yml`. You can use the https://editor.swagger.io/ to see it online or download the swagger view on VSCode editor

# Deployment

Every push to master this project runs executes a couple of plataforms. First it build on codeship, then this executes a code coverage analysis on Codecov and finally a Maintainability analysis on codeclimate. This project has authomatic build on hub.docker. https://cloud.docker.com/repository/docker/camiloperezv/atlas_corp_housinganywhere

# Project structure

## bin/www - app.js

Is where the http server is declared and all important modules used by express are loaded

## logic

This project implements a routing system. The api is defined in `/routes` folder. This is where the request is taken and they decide where to send it. After this, the request lands into the controller. This controller just send the info into the model and returns the expected data. Finally, the model makes all the magic and return some value to the controller.
