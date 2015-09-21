/**
 * Main application file
 */

'use strict';
//require('newrelic');
import express from 'express';
import config from './config/environment';
import http from 'http';

// Setup server
var app = express();
var server = http.createServer(app);
var Firebase = require('firebase');
var twitConfig = require('./config/twit');
var Twit = require('twit');
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

var getTrending = function() {
  console.log("getting tweets!");
  var T = new Twit(twitConfig.twit);
  T.get('trends/place', { id: 1, count: 10 }, function(err, data, response) {
    if(data.errors){
      console.log(data.errors);
      return false;
    } else if(data[0] && data[0].trends){
      var trends = data[0].trends;
      trends.forEach(function (trend) {
        var trendkey = encodeURIComponent(trend.query).replace(/\./g, '%2E');
        var trendRef = new Firebase('https://tread.firebaseio.com/trending/' + trendkey);
        trendRef.transaction(function (currentValue) {
          if(currentValue === null){
            trend.votes = 0;
            trend.created_at = Firebase.ServerValue.TIMESTAMP;
            trend['.priority'] = 0;
            console.log("NEW TREND!");
            console.log(trend.name);
            return trend;
          } else{
            console.log("Existing TREND!");
            console.log(trend.name);
            return;
          }
        })
      });
      return true;
    } else {
      return false;
    }
  });
}
var interval = setInterval(getTrending, 120000);
// Expose app
exports = module.exports = app;
