

/**
 * Factory
 */
angular
  .module('ngFiltersMasksBr.filters')
  .factory('ngFMUtils', ngFMUtils);

/**
 * @name ngFMUtils
 * @description Responsável por processos em comum em diversos componentes
 * @returns {Object} API
 */
function ngFMUtils(EMPTY_INPUT_CHARACTER) {
  return {

    /**
     * @name fillEmptyCharacters
     * @description Com base no tamanho do padrão (patternLength),
     * substitui os valores que ainda faltam por um coringa.
     * @param {String} stringValue Valor atual qual será possívelmente alterado
     * @param {Number} patternLength Tamanho do padrão
     * @param {String} wildcard Coringa utilizado para substituir os valores que ainda faltam para completar o padrão
     * @returns {String} Valor possívelmente alterado contendo os coringas
     */
    replaceEmptyValuesWith: function(stringValue, patternLength, wildcard){
      wildcard = wildcard || EMPTY_INPUT_CHARACTER;
      var emptyValuesCount = patternLength - stringValue.length;

      for(var i = 0; i < emptyValuesCount; i++){
        stringValue += wildcard;
      }

      return stringValue;
    }
  };
}