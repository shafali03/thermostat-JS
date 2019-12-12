'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('start at 20 degrees', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increase temperature with up()', function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('decrease in temperature with down()', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('has power saving mode', function(){
    expect(thermostat.isPowerSaveModeOn()).toBe(true);
  });

  it('power save on on by default', function(){
    expect(thermostat.isPowerSaveModeOn()).toBe(true);
  })


});

