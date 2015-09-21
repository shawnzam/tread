'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var recentCtrlStub = {
  index: 'recentCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var recentIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './recent.controller': recentCtrlStub
});

describe('Recent API Router:', function() {

  it('should return an express router instance', function() {
    recentIndex.should.equal(routerStub);
  });

  describe('GET /api/recents', function() {

    it('should route to recent.controller.index', function() {
      routerStub.get
        .withArgs('/', 'recentCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
