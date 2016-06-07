
require('../index.module.js');

const sinon     = require('sinon');
const chai      = require('chai');
const assert    = chai.assert;
let   cepFilter = null;



describe('CEP', function () {

  beforeEach(function (done) {
    module('ngFiltersMasksBr.filters');
  });

  beforeEach(inject(function($filter){
    cepFilter = $filter('cepFilter');
  }));


  describe('Filter', function () {
    it('fake', function (done) {
      assert.isTrue(true);
    });
  });


});
