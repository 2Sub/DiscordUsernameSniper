@echo off

IF NOT EXIST "node_modules" (
  npm i
)

node index.js

PAUSE