"use strict";
document.addEventListener("DOMContentLoaded", function (event) {

  function append_div(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);
  }

  if ('serviceWorker' in navigator) {
    append_div('Service Worker supported');
  } else {
    append_div('Service Worker <b>not</b> supported');
  }

  if (window.Notification) {
    append_div('Notification supported');
  } else {
    append_div('Notification <b>not</b> supported');
  }

  if (navigator.geolocation) {
    append_div('Geolocation supported');
  } else {
    append_div('Geolocation <b>not</b> supported');
  }

  if (navigator.getBattery()) {
    append_div('Battery supported');
  } else {
    append_div('Battery <b>not</b> supported');
  }

  if (navigator.mozGetUserMedia) {
    append_div('getUserMedia supported');
  } else {
    append_div('getUserMedia <b>not</b> supported');
  }
  
  if (window.speechSynthesis) {
    append_div('SpeechRecognition supported');
  } else {
    append_div('SpeechRecognition <b>not</b> supported');
  }

  if ('mozPointerLockElement' in navigator) {
    append_div('Pointer Lock supported');
  } else {
    append_div('Pointer Lock <b>not</b> supported');
  }

  if (navigator.mozApps) {
    append_div('Open Web App supported');
  }

  if ('mozBluetooth' in navigator) {
    append_div('FxOS Bluetooth supported');
  } else {
    append_div('Bluetooth <b>not</b> supported');
  }

  if ('mozTCPSocket'  in navigator) {
    append_div('FxOS TCP Socket supported');
  } else {
    append_div('FxOS TCP Socket <b>not</b> supported');
  }

  if ('push' in navigator) {
    append_div('FXOS push supported');
  } else {
    append_div('FxOS Push <b>not</b> supported');
  }

  if (navigator.getDeviceStorage) {
    append_div('FxOS DeviceStorage supported');
  } else {
    append_div('FxOS DeviceStorage <b>not</b> supported');
  }

  if (window['MozActivity']) {
    append_div('FxOS MozActivity supported');
  } else {
    append_div('FxOS MozActivity <b>not</b> supported');
  }



})