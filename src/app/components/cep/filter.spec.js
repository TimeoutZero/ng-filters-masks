(function(){
  'use strict';


  /**
   * Variables
   */
  var cepFilter = null;


  /**
   * Main describe
   */
  describe('CEP fIlter', function () {

    /**
     * Before section
     */
    beforeEach(function () {
      module('ngFiltersMasksBr.filters');
    });

    beforeEach(inject(function($filter){
      cepFilter = $filter('cep');
    }));

    /**
     * Tests
     */
    describe('For complete input', function () {

      describe('when it begins with 0', function () {
        it('translates the value', function () {
          var cep = cepFilter('09639000');
          expect(cep).toEqual('09.639-000');
        });
      });


      describe('When all characters are the same', function () {
        it('translates the value', function () {
          var cep = cepFilter('11111111');
          expect(cep).toEqual('11.111-111');
        });
      });

      describe('When there are some characters which are not numbers', function () {
        it('Removes undesirable characters', function () {
          var cep = cepFilter('096a3b00');
          expect(cep).toEqual('09.630-0');
        });
      });

    });



    describe('For incomplete input', function () {
      describe('when it begins with 0', function () {
        it('translates the value', function () {
          var cep = cepFilter('096');
          expect(cep).toEqual('096');
        });
      });
    });



  });
})();