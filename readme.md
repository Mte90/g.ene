#G.ene
[![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)   
 
##What?

Graphene is a Boot2Gecko version for desktop that use the same technology of Firefox OS but in the desktop.  
In few words is a Firefox with the UI and with the Firefox OS APIs.

Actually the [Graphene build](https://archive.mozilla.org/pub/b2g/nightly/latest-mozilla-central/) exist only for Linux, check on [1218589](https://bugzilla.mozilla.org/show_bug.cgi?id=1218589).

##What is this project?
This project is an experimental to get an alternative to Electron/NW.js that are based on Webkit.  

##API Supported
The API supported from this builds are different from Firefox OS and Firefox desktop and require the [permission](https://developer.mozilla.org/en-US/Apps/Build/App_permissions) from the manifest.webapp (actually the app is `privileged`).  
Actually the test page confirm:  
* Service Worker not supported
* Notification supported
* Geolocation supported
* Battery supported
* getUserMedia supported
* SpeechRecognition supported
* Pointer Lock not supported
* Open Web App supported
* Bluetooth not supported
* FxOS TCP Socket not supported
* FxOS Push not supported
* FxOS DeviceStorage supported
* FxOS MozActivity supported

PS: The default font is [Fira](https://github.com/mozilla/Fira)

###Experimental release goal
* Create a page that show the HTML5 api supported like (html5test.com) with the Firefox OS Apis
* Improve the script
* Benchmark
* Comparison with Electron/nw.js

###1.0 release goal
The 1.0 release have to goal to create a working alternative to Electron/nw.js

* Generate automatically the manifest.webapp file of Open Web App
* Bower support
* Ultralight system

##How to install

Require a linux amd64 system and python (for the web server)!  
Execute `launch.sh` that at first run will download the last graphene build and [Browser.Html](https://github.com/browserhtml/browser.html).  

`launch.sh` will launch graphene with the Firefox OS Boilerplate.  
`launch.sh true` will launch Graphene with Browser.html.  

Remember the F5 key refresh the page on graphene, useful for testing.

##Benchmark

[TODO]