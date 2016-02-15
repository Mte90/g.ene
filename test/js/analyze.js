"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    
    function append_div(text) {
        var div = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild(div);
    }

    if (window.applicationCache) {
        append_div('AppCache supported');
    }
    
    if (navigator.mozApps) {
        append_div('Open Web App supported');
    }
    
    if (navigator.mozAlarms) {
        append_div('FxOS mozAlarms supported');
    }
    
    if (navigator.getDeviceStorage) {
        append_div('FxOS DeviceStorage supported');
    }
    
    if (window['MozActivity']) {
        append_div('FxOS MozActivity supported');
    }

})