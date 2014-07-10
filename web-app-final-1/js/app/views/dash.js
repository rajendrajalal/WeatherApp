define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/places',
	'app/views/place'
], function ($, _, Backbone, PlacesCollection, PlaceView) {

	'use strict';

	var DashView = Backbone.View.extend({

		html: [
			'<h3>Dashboard page</h3>',
			'<div id="places-list" class="clearfix">Loading...</div>',
			'<div id="dash-buttons"></div>'
		].join(''),

		views: [],

		initialize: function() {
			this.$el.html(this.html);
			this.$placesList = this.$('#places-list');
			this.$dashButtons = this.$('#dash-buttons');

			this.collection = new PlacesCollection([]);
			this.listenTo(this.collection, 'change destroy', this.render);
			this.collection.fetch();

			window.debug = {
				places: this.collection
			}
		},

		render: function() {
			var that = this;
			this.cleanUp();

			if (this.collection.length) {

				this.collection.each(function (element, index, list) {
					var place = new PlaceView({
						model: element,
						id: ['place-',element.get('countryCode'),'-',element.get('name')].join('')
					});
					that.$placesList.append(place.render().el);
					that.views.push(place);
				});
				
			} else {
				that.$placesList.html('Sorry, there are no places to display, please add some.');
			}
			return this;
		},

		cleanUp: function() {
			for (var i = 0; i<this.views.length; i++) {
				this.views[i].remove();
			}
			this.views.length = 0;
			this.$placesList.html('');
		}

	});

	return DashView;
});