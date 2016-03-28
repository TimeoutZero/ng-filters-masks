

# =============================================
# Main Module
# =============================================
angular.module 'ngFiltersMasks'
  .config ($stateProvider, $urlRouterProvider) ->

    $stateProvider
      .state "mainDemo.home",
        url  : "home"
        views:
          'main@mainDemo':
            templateUrl : "app/features/home/template.html"
            controller  : "HomeController as homeCtrl"

        resolve:
          lang:  ['$translatePartialLoader', '$q', ($translatePartialLoader, $q)->
            promises = [
              $translatePartialLoader.addPart('features/home')
            ]
            return $q.all(promises)
          ]
