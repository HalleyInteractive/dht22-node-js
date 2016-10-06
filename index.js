(function() {
  'use strict';

  const dht22 = require('./dht22.js');
  const request = require('request');
  const READING_INTERVAL = 1000 * 60 * 10; // 10 minutes
  const HOST = 'http://localhost:3000';
  const NODE_ID = 'rpi_hub';

  setInterval(() => {
    dht22.read();
    let body = {
      temperature: dht22.temperature(),
      humidity: dht22.humidity()
    };
    request.put({
      url: `${HOST}/nodes/${NODE_ID}/reading`,
      json: body},
      (error) => {
        if(error) {
          console.log('Error: ', error);
        }
      console.log('Send reading to host');
    });
  }, READING_INTERVAL);

}());

// TODO: Read from config, if no config ask user input
// TODO: Check if node exists, create node first at host
// TODO: Check if current reading is the same as the last.
