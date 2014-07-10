define([
	'app/views/app',
	'app/routers/router'
], function (AppView, Router) {
	'use strict';

	var initialize = function () {
		var appView = new AppView();
		$('body').append(appView.render().el);

		var router = new Router(appView);
		Backbone.history.start();
	};

	return {
		initialize: initialize
	}
});