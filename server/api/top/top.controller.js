/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/tops              ->  index
 */

'use strict';

// Gets a list of Tops
exports.index = function(req, res) {
  res.json([]);
};
