// Copyright Rory Mackay 2022
// Created by: Rory Mackay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates fahrenheit to celsius
 */
function calculateCelsius () {
  // get user input
  let fahrenheit = parseFloat(document.getElementById('temp-fahrenheit').value)

  // calculate the temperature in celsius
  let celsius = (5/9) * (fahrenheit - 32)

  // display the results
  document.getElementById('celsius').innerHTML = "The temperature in celsius is " + celsius.toFixed(2) + "°C"
}