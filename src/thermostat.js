'use strict';

function Thermostat() {
  this.temperature = 20;
  this.temperature += 1;
  this.temperature -= 1;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.isPowerSaveMode = true;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  this.temperature += 1;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -=1;
}
Thermostat.prototype.isPowerSaveModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function() {
  if(this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}


Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSaveModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}