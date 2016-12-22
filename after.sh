#!/bin/bash

echo "=============="
node ace migration:run
node ace db:seed
pm2 start server.js --no-daemon
