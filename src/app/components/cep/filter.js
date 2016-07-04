

/**
 * Filter
 */
angular
  .module('ngFiltersMasksBr.filters')
  .filter('cep', cepFilter)
  .filter('brCEP', cepFilter);

/**
 * @name cepFilter
 * @description Traduz valores numéricos para o padrão de CEP brasileiro
 * @returns {Function} Função de filtro
 */
function cepFilter() {

  /**
   * @param {String} input Valor a ser traduzido para o padrão de CEP
   * @returns {String} str
   */
  return function (input) {
    var str = input + '';
    str = str.replace(/\D/g, '');
    str = str.replace(/^(\d{2})(\d{3})(\d)/, '$1.$2-$3');
    return str;
  };
}