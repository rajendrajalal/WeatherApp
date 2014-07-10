define([
	'app/views/app'
], function (AppView) {
	'use strict';

	var initialize = function () {
		var appView = new AppView();
		$('body').append(appView.render().el);
	};

	return {
		initialize: initialize
	}
});