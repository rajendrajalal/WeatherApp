define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/dash',
	'app/views/about',
	'app/views/settings'
], function ($, _, Backbone, DashView, AboutView, SettingsView) {

	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view',

		html: [
			'<div class="navbar">',
				'<a class="navbar-brand" href="#">Weather Watcher</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
					'<li id="nav-about"><a href="#about">About</a></li>',
				'</ul>',
				'<p class="navbar-text pull-right"></p>',
			'</div>',
			'<button type="button" id="btn-settings" class="btn btn-default" style="float: right; margin: 10px;">Settings</button>',
			'<div id="content"></div>'
		].join(''),

		events: {
			'click #btn-settings': 'openSettings'
		},

		views: {},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);

			this.views['about'] = new AboutView({
				id: 'page-about', 
				className: 'page-view'
			});

			this.views['dash'] = new DashView({
				id: 'page-dash', 
				className: 'page-view'
			});

			this.$el.append(this.html);

			this.$('#content').append(this.views['about'].render().el);
			this.$('#content').append(this.views['dash'].render().el);
		},

		render: function() {
			this.$el.css('background-color', this.model.get('backgroundColor'));
			this.$('.navbar-text').html(this.model.get('welcomeMessage'));
			var tempType = this.model.get('celsius') ? 'celsius' : 'fahrenheit';
			this.$el.removeClass('celsius fahrenheit');
			this.$el.addClass(tempType);
			return this;
		},

		setPage: function(page) {
			this.$('.nav li').removeClass('active');
			this.$('.page-view').hide();
			this.$('#page-'+page).show();
			this.$('#nav-'+page).addClass('active');
		},

		openSettings: function(e) {
			var modal = new SettingsView({
				title: 'Application Settings',
				id: 'modal-settings',
				model: this.model
			});
			modal.show();
		}

	});

	return AppView;
});