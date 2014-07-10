define([
	
], function () {

	'use strict';

	var isNumber = function (n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	var celsiusToFahrenheit = function (cel) {
		if (!isNumber(cel)) {
			return null;
		}
		var fahr = (cel * 9 / 5) + 32;
		return Math.round(fahr * 100) / 100;
	};

	var fahrenheitToCelsius = function (fahr) {
		if (!isNumber(fahr)) {
			return null;
		}
		var cel = (fahr - 32) / 9 * 5;
		return Math.round(cel * 100) / 100;
	};

	return {
		celsiusToFahrenheit: celsiusToFahrenheit,
		fahrenheitToCelsius: fahrenheitToCelsius
	}

});