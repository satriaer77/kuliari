#!/bin/bash

NOWPATH=$PWD

if which xdg-open > /dev/null
then
  NOWPATH = $NOWPATH."app/index.html"
  echo $NOWPATH
  x-www-browser $NOWPATH --disable-web-security --allow-file-access-from-files
fi
