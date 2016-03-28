

angular.module "ngFiltersMasksDemo.vendors", [
  "ngTouch"
  "ngAnimate"
  "ngSanitize"
  "ngResource"
  "ui.router"
  "ui.bootstrap"
  "ui.select"
  "oitozero.ngSweetAlert"
  "ngToast"
  "angular-loading-bar"
  "pascalprecht.translate"
  "agGrid"
  "matchMedia"
  "hToast"
  "hDefaults"
  'brasil.filters'
]

# =============================================
# Modules
# =============================================
angular.module "ngFiltersMasksDemo.controllers" , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.filters"     , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.factories"   , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.constants"   , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.services"    , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.directives"  , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.mocks"       , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.i18n"        , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.configs"     , ["ngFiltersMasksDemo.vendors"]
angular.module "ngFiltersMasksDemo.providers"   , ["ngFiltersMasksDemo.vendors"]



# =============================================
# Scripts Module
# =============================================
angular.module "ngFiltersMasksDemo.scripts"     , [
  "ngFiltersMasksDemo.controllers"
  "ngFiltersMasksDemo.constants"
  "ngFiltersMasksDemo.filters"
  "ngFiltersMasksDemo.factories"
  "ngFiltersMasksDemo.services"
  "ngFiltersMasksDemo.directives"
  "ngFiltersMasksDemo.mocks"
  "ngFiltersMasksDemo.i18n"
  "ngFiltersMasksDemo.providers"
  "ngFiltersMasksDemo.configs"
]


# =============================================
# Main Module
# =============================================
angular.module "ngFiltersMasksDemo", [
  "ngFiltersMasksDemo.scripts"
  "ngFiltersMasksDemo.vendors"
]
