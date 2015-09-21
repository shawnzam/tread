/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/recents              ->  index
 */

'use strict';

// Gets a list of Recents
exports.index = function(req, res) {
  res.json([]);
};
