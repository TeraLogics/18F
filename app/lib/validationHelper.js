'use strict';

var _ = require('underscore');

/**
 * Validates an integer.
 * @param {*} input The input.
 * @returns {Boolean} Whether or not the input was an integer
 */
exports.isValidInt = function (input) {
	return _.isFinite(parseInt(input, 10));
};