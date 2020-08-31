  #!bin/bash
  now=`date '+%Y-%m-%d %H:%M:%S'`
  echo "Hello vue_app !"
  cd /home/vue_app
  rm -rf ./share_file/*
  cp -r ./dist/* ./share_file
  echo "Update vue_app success!"$now
#  ps -aux

