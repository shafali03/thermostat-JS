$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
};


function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=0d4e4533277d66d4c3a12c8b0bd38fda';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
}
  displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

});