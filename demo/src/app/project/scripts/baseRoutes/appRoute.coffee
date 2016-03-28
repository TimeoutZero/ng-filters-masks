

###
  ## Login base route
###
angular.module 'ngFiltersMasks'
  .config ($stateProvider, $urlRouterProvider) ->

    $stateProvider
      .state "mainDemo",
        url         : "/"
        abstract    : yes
        controller  : () ->

        views:
          '':
            templateUrl : "app/project/scripts/baseRoutes/template.html"

    $urlRouterProvider.otherwise '/home'