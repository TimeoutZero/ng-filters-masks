'use strict'

###
## [MODULE] LoadingBar
___

**App Config**
###
angular.module 'ngFiltersMasks.configs'
  .config [ 'cfpLoadingBarProvider', (cfpLoadingBarProvider) ->
    cfpLoadingBarProvider.includeSpinner = yes
    cfpLoadingBarProvider.latencyThreshold = 250
  ]
