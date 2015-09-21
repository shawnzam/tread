'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var topCtrlStub = {
  index: 'topCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var topIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './top.controller': topCtrlStub
});

describe('Top API Router:', function() {

  it('should return an express router instance', function() {
    topIndex.should.equal(routerStub);
  });

  describe('GET /api/tops', function() {

    it('should route to top.controller.index', function() {
      routerStub.get
        .withArgs('/', 'topCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
