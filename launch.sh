#!/bin/sh

browser=$1

#Download the last graphene build
if [ ! -d './graphene' ]; then
    wget https://archive.mozilla.org/pub/b2g/nightly/latest-mozilla-central/graphene-47.0a1.en-US.linux-x86_64.tar.bz2 -O graphene-47.tar.bz2
    tar xvjf graphene-47.tar.bz2
    rm graphene-47.tar.bz2
fi

#Download Browser.Html
if [ ! -d './browser.html' ]; then
    git clone git@github.com:browserhtml/browser.html.git browser.html
    ( cd ./browser.html && npm install --no-optional )
fi

if [ -z $browser ]; then
    #Kill the script that run on the port 3000
    fuser -k -n tcp 6060 &>/dev/null && \
    #Run a webserver
    ( cd ./test && python -m SimpleHTTPServer 3000 &>/dev/null ) 
else
    npm start
fi

#Run graphene
./graphene/graphene --start-manifest --jsconsole http://0.0.0.0:6060/manifest.webapp