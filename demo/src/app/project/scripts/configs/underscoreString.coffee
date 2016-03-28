'use strict'

###
## [MODULE] LoadingBar
___

**App Config**
###
angular.module 'ngFiltersMasks.configs'
  .run ($window) ->
    _.mixin $window.s.exports()