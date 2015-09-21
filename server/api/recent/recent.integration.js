'use strict';

var app = require('../..');
var request = require('supertest');

describe('Recent API:', function() {

  describe('GET /api/recents', function() {
    var recents;

    beforeEach(function(done) {
      request(app)
        .get('/api/recents')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          recents = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      recents.should.be.instanceOf(Array);
    });

  });

});
