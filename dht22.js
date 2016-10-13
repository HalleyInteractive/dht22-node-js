(function() {
  'use strict';

  let sensor = require('node-dht-sensor');
  let readout = {
    temperature: 0,
    humidity: 0,
  };

  const GPIO_PIN = 4;

  class DHT22 {

    constructor() {
      let initialised = sensor.initialize(22, GPIO_PIN);
      if(!initialised) {
        console.log('Failed to initialise sensor');
      }
    }

    read() {
      readout = sensor.read();
      return readout;
    }

    temperature() {
      return this.roundToOneDecimal(readout.temperature);
    }

    humidity() {
      return this.roundToOneDecimal(readout.humidity);
    }

    readout() {
      let tmpReadout = {
        temperature: this.roundToOneDecimal(readout.temperature),
        humidity: this.roundToOneDecimal(readout.humidity),
      };
      return tmpReadout;
    }

    /**
    * Rounds a float to a single decimal place.
    * @param number {number} Number to round.
    * @return number {number} Rounded number.
    */
    roundToOneDecimal(number) {
      return Number(Math.round(number+'e2')+'e-2');
    }

    /**
    * roundHalf
    * Rounds a given floating number to it's closes .5 value
    * @param num {float} Floating number
    * @return {float} Floating number rounded to closest .5 value
    **/
    roundHalf(num) {
      return Math.round(num * 2) / 2;
    }

  }
  module.exports = new DHT22();
})();
