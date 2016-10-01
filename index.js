(function() {
  'use strict';

  const dht22 = require('./dht22.js');
  const request = require('request');
  const READING_INTERVAL = 1000;
  const HOST = 'http://localhost:3000';
  const NODE_ID = 'rpi_hub';

  setInterval(() => {
    let reading = dht22.read();
    let body = {
      temperature: reading.temperature,
      humidity: reading.humidity
    };
    request.put(`${HOST}/nodes/${NODE_ID}/reading`)
    .send(body)
    .end(() => {
      console.log('Send reading to host');
    });
  }, READING_INTERVAL);

}());
