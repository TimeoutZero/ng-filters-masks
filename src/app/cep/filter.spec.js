'use strict';


var cepFilter = null;


describe('CEP', function () {

  beforeEach(function () {
    module('ngFiltersMasksBr.filters');
  });

  beforeEach(inject(function($filter){
    cepFilter = $filter('cep');
  }));


  describe('Filter', function () {
    it('fake', function () {
      expect(true).toBeTruthy();
    });
  });


});
