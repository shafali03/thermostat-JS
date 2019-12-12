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

  
});

