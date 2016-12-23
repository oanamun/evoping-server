#!/bin/bash

ace migrate:run
pm2 start server.js -i 0 --no-daemon
