'use strict';

var _ = require('underscore'),
	moment = require('moment'),
	Promise = require('bluebird'),
	request = require('request-promise');

var options = {
		uri: 'https://api.fda.gov/food/enforcement.json',
		method: 'GET',
		resolveWithFullResponse: true, // useful for debugging
		json: true,
		qsStringifyOptions: {
			encodeURIComponent: function (str) { return str; } // requires node 0.12, needed to work with complex searches
		},
		useQuerystring: true
	},
	limit = 100;

/**
 * Makes a request to the openFDA's api
 * @param obj
 * @param {String} obj.search
 * @param {Number} obj.skip
 * @param {Number} obj.limit
 * @returns {Promise}
 */
function makeRequest(obj) {
	if (obj.limit) {
		if (obj.limit > 100) {
			return Promise.reject(new Error('Invalid limit'));
		}
	} else {
		obj.limit = limit;
	}

	if (obj.skip && obj.skip > 5000) {
		return Promise.reject(new Error('Invalid skip'));
	}

	console.log('Making request to api', obj);
	return request.get(_.extend(options, {
		qs: obj
	})).then(function (response) {
		//console.log(response);
		return response.body;
	}).catch(function (err) {
		//console.log(err);
		// TODO need better wrapper for error handling
		console.log(err.statusCode + ' - ' + JSON.stringify(err.error));
		throw {
			statusCode: err.statusCode,
			error: err.error.error // `error` for request -> `error` for openFDA response
		};
	});
}

/**
 * TODO
 * @param obj
 * @returns {Promise}
 */
exports.getFoodRecallById = function (obj) {
	return makeRequest({
		search: 'recall_number:' + obj.id,
		limit: 1
	});
};

/**
 * TODO
 * @param obj
 * @returns {Promise}
 */
exports.getFoodRecallByEventId = function (obj) {
	return makeRequest({
		search: 'event_id:' + obj.id
	});
};

/**
 * TODO
 * @param obj
 * @returns {Promise}
 */
exports.getFoodRecallByRecallingFirm = function (obj) {
	return makeRequest({
		search: 'recalling_firm:' + obj.name
	});
};

/**
 * TODO
 * @param obj
 * @returns {Promise}
 */
exports.getFoodRecallBySearch = function (obj) {
	var search = [];

	if (obj.locations) {
		search.push('(' + _.map(obj.locations, function (location) {
			return 'distribution_pattern:"' + location.replace(/ /g, '+') + '"';
		}).join('+') + ')');
	}

	if (obj.from && obj.to) {
		search.push('recall_initiation_date:[' + moment.unix(obj.from).format('YYYY-MM-DD') + '+TO+' + moment.unix(obj.to).format('YYYY-MM-DD') + ']');
	}

	if (obj.classificationlevel) {
		search.push('classification:"Class+' + (new Array(obj.classificationlevel + 1).join('I')) + '"');
	}

	if (obj.keywords) {
		search.push('(' + _.map(obj.keywords, function (keyword) {
			return 'reason_for_recall:"' + keyword.replace(/ /g, '+') + '"';
		}).join('+') + ')');
	}

	return makeRequest({
		search: search.join('+AND+')
	});
};
