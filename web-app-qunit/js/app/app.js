define([
	'jquery',
], function ($) {

	'use strict';

	var id = 'content';

	var getId = function () {
		return id;
	};

	var getTimeString = function () {
		var date = new Date();
		return [date.getHours(), ':', date.getMinutes()].join('');
	};

	var initialize = function () {
		$('body').append('<div id="' + id + '"></div>');
	};

	var displayTime = function () {
		var html = [
			'<div class="alert">',
				'<button type="button" class="close" data-dismiss="alert">&times;</button>',
				'The time is: ',
				getTimeString(),
			'</div>'
		].join('');
		$('#' + id).html(html);
	};

	return {
		initialize: initialize,
		displayTime: displayTime,
		getId: getId
	}
});