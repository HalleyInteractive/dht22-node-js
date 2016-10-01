(function() {
  'use strict';

  const dht22 = require('./dht22.js');
  const request = require('request');
  const READING_INTERVAL = 1000;

  setInterval(() => {
    console.log(dht22.read());
  }, READING_INTERVAL);

}());
