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
    append_div('Notification supported, on Graphene not work');
  } else {
    append_div('Notification <b>not</b> supported');
    document.querySelector('.notification').style.display = 'none';
  }

  if (navigator.geolocation) {
    append_div('Geolocation supported, on Graphene not work');
  } else {
    append_div('Geolocation <b>not</b> supported');
    document.querySelector('.geolocation').style.display = 'none';
  }

  if (navigator.getBattery()) {
    append_div('Battery supported');
  } else {
    append_div('Battery <b>not</b> supported');
    document.querySelector('.battery').style.display = 'none';
  }

  if (navigator.mozGetUserMedia) {
    append_div('getUserMedia supported');
  } else {
    append_div('getUserMedia <b>not</b> supported');
    document.querySelector('.getUserMedia').style.display = 'none';
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

  document.querySelector('.notification').addEventListener('click', function () {
    if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        if (!("permission" in Notification)) {
          Notification.permission = permission;
        }
      });
    }

    if (Notification.permission === "granted") {
      new Notification("See this", {
        body: "This is a notification"
      });
      console.log('Notification OK');
    }
  });

  document.querySelector('.geolocation').addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      append_div("<br><strong>Latitude:</strong> " + position.coords.latitude + ", <strong>Longitude:</strong> " + position.coords.longitude);
    });
  });

  document.querySelector('.battery').addEventListener('click', function () {
    var battery = navigator.battery,
            batteryLevel = Math.round(battery.level * 100) + "%",
            charging = battery.charging,
            chargingTime = parseInt(battery.chargingTime / 60, 10),
            dischargingTime = parseInt(battery.dischargingTime / 60, 10),
            batteryInfo;

    batteryInfo = "<br><strong>Battery level:</strong> " + batteryLevel + "<br>";
    batteryInfo += "<strong>Battery charging:</strong> " + charging + "<br>";
    batteryInfo += "<strong>Battery charging time:</strong> " + chargingTime + "<br>";
    batteryInfo += "<strong>Battery discharging time:</strong> " + dischargingTime;
    append_div(batteryInfo);
  });

  document.querySelector('.getUserMedia').addEventListener('click', function () {
    append_div('<video></video>');

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video:
                {
                  width: {ideal: 1280},
                  height: {ideal: 720}
                }
      }).then(
              function (stream) {
                var video = document.querySelector('video');
                video.src = window.URL.createObjectURL(stream);
                video.onloadedmetadata = function (e) {
                  video.play();
                };
              }
      );
    } else {
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      navigator.getUserMedia({audio: true, video: {width: 1280, height: 720}},
              function (stream) {
                var video = document.querySelector('video');
                video.src = window.URL.createObjectURL(stream);
                video.onloadedmetadata = function (e) {
                  video.play();
                };
              },
              function (err) {
                console.log("The following error occurred: " + err.name);
              }
      );
    }
  });

});