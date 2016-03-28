$(document).ready ->

  window.ngFiltersMasksEnv or= {}
  setupData              = {}
  waitForSetup           = false
  ngFiltersMasksEnv    = window.ngFiltersMasksEnv
  window.ngFiltersMasksEnv.user = null

  # Bootstrap da aplicação
  bootstrap = ->
    angular.bootstrap(document, ["ngFiltersMasks"])
    return

  bootstrap()
