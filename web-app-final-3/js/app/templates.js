define([
	'underscore'
], function (_) {

	var Templates = {};

	Templates['place'] = [
		'<div class="panel panel-info">',
			'<div class="panel-heading">',
				'<button id="btn-expand" type="button" class="close" aria-hidden="true">+</button>',
				'<button id="btn-remove" type="button" class="close" aria-hidden="true">&times;</button> ',
				'<h3 class="panel-title">',
					'<%= name %> - <%= countryCode %>',
				'</h3>',
			'</div>',
			'<div class="panel-body">',
				'Loading...',
			'</div>',
		'</div>'
	].join('');

	Templates['day'] = [
		'<div class="forecast-day">',
			'<h3><%= weekday %></h3>',
			'<img src="<%= icon_url %>" alt="" class="img-thumbnail">',
			'<p class="forecast-fahr"><%= lowFahrenheit %>°F - <%= highFahrenheit %>°F</p>',
			'<p class="forecast-cel"><%= lowCelsius %>°C - <%= highCelsius %>°C</p>',
			'<div class="forecast-conditions"><%= conditions %></div>',
		'</div>'
	].join('');

	Templates['modal'] = [
		'<div class="modal fade">',
			'<div class="modal-dialog">',
				'<div class="modal-content">',
					'<div class="modal-header">',
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
						'<h4 class="modal-title"><%=title %></h4>',
					'</div>',
					'<div class="modal-body">test</div>',
				'</div>',
			'</div>',
		'</div>'
	].join('');

	Templates['settings'] = [
		'<form role="form">',
			'<div class="form-group">',
				'<label for="welcomeMessageInput">Welcome Message</label>',
				'<input type="text" class="form-control" id="welcomeMessageInput" placeholder="Enter Welcome Message" value="<%= welcomeMessage %>">',
			'</div>',
			'<div class="form-group">',
				'<label for="backgroundColorInput">Background Color</label>',
				'<input type="text" class="form-control" id="backgroundColorInput" placeholder="#000000" value="<%= backgroundColor %>">',
			'</div>',
			'<div class="form-group">',
				'<select id="tempType" class="form-control">',
					'<option value="fahr" <% if(!celsius)print(\"selected\") %>>Fahrenheit</option>',
					'<option value="cel" <% if(celsius)print(\"selected\") %>>Celsius</option>',
				'</select>',
			'</div>',
			'<div id="btn-save" class="btn btn-default">Save</div>',
		'</form>'
	].join('');

	for (var tmpl in Templates) {
	    if (Templates.hasOwnProperty(tmpl)) {
	        Templates[tmpl] = _.template(Templates[tmpl]);
	    }
	}

	return Templates;
});