'use strict';

var app = require('../..');
var request = require('supertest');

describe('Top API:', function() {

  describe('GET /api/tops', function() {
    var tops;

    beforeEach(function(done) {
      request(app)
        .get('/api/tops')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          tops = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      tops.should.be.instanceOf(Array);
    });

  });

});
