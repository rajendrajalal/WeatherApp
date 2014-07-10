define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/app'
], function ($, _, Backbone, AppView) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'place/:param': 'goToDetail',
			'': 'goToDash',
			'dash': 'goToDash',
			'about': 'goToAbout'
		},

		initialize: function (view) {
			this.appView = view;
		},

		goToDetail: function (param) {
			this.appView.setDetail(param);
		},

		goToDash: function () {
			this.appView.setPage('dash');
		},

		goToAbout: function () {
			this.appView.setPage('about');
		}
	});

	return Router;

});