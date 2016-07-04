

angular.module "ngFiltersMasks.vendors", [
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
  'ngFiltersMasksBr'
]

# =============================================
# Modules
# =============================================
angular.module "ngFiltersMasks.controllers" , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.filters"     , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.factories"   , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.constants"   , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.services"    , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.directives"  , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.mocks"       , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.i18n"        , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.configs"     , ["ngFiltersMasks.vendors"]
angular.module "ngFiltersMasks.providers"   , ["ngFiltersMasks.vendors"]



# =============================================
# Scripts Module
# =============================================
angular.module "ngFiltersMasks.scripts"     , [
  "ngFiltersMasks.controllers"
  "ngFiltersMasks.constants"
  "ngFiltersMasks.filters"
  "ngFiltersMasks.factories"
  "ngFiltersMasks.services"
  "ngFiltersMasks.directives"
  "ngFiltersMasks.mocks"
  "ngFiltersMasks.i18n"
  "ngFiltersMasks.providers"
  "ngFiltersMasks.configs"
]


# =============================================
# Main Module
# =============================================
angular.module "ngFiltersMasks", [
  "ngFiltersMasks.scripts"
  "ngFiltersMasks.vendors"
]
