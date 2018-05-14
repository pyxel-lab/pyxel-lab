#!/bin/bash
export DATABASE_URL="$(heroku config:get DATABASE_URL --app pyxel-lab)?ssl=true"
echo $DATABASE_URL