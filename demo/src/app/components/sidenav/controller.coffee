
angular.module "ngFiltersMasks.controllers"
  .controller "SideNavCtrl", ($rootScope, $scope, $state, $modal, hAlert, $translatePartialLoader, $translate, $timeout) ->
    ###
    ## Init
    ###
    $translatePartialLoader.addPart('components/sidenav')
    $scope.attrs =
      features : []

    $scope.open = false


    $timeout ->
      $scope.attrs.features = [
        {name: 'NATURE',             route: 'natures', icon: 'icon-adm-file-empty', hasOldName: yes}
        {name: 'PROPERTY',          route: 'property', icon: 'glyphicon glyphicon-menu-hamburger' , hasOldName: yes}
        {name: 'NATURE_GROUP',       route: 'natureGroup', icon: 'icon-adm-files-empty' , hasOldName: yes }
        {name: 'USER',               route: 'user', icon: 'icon-adm-user' , hasOldName: no }
        {name: 'PROFILE',            route: 'profile', icon: 'icon-adm-groups' , hasOldName: yes }
        {name: 'WORKFLOW', route: 'workflow', icon: 'icon-adm-tree' , hasOldName: no }
        # {name: 'SIDENAV.SCANNERS', route: 'scanners', icon: 'glyphicon glyphicon-print' , hasOldName: yes }
        {name: 'PLAN',               route: 'plan', icon: 'icon-adm-plan' , hasOldName: no }
        {name: 'TRASH',              route: 'trash', icon: 'icon-adm-trash' , hasOldName: no, plural: 'one' }
        # {name: 'SIDENAV.HELP',     route: 'help', icon: 'icon-adm-help' , hasOldName: yes }
      ]

    $scope.$on '$stateChangeStart', ->
      $scope.open = false
