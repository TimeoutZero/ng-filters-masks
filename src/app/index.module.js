'use strict';

// =============================================
// Vendors
// =============================================
angular.module("ngFiltersMasksBr.vendors", ['ngSanitize']);

// =============================================
// Modules
// =============================================
angular.module("ngFiltersMasksBr.controllers" , ["ngFiltersMasksBr.vendors"]);
angular.module("ngFiltersMasksBr.filters"     , ["ngFiltersMasksBr.vendors"]);
angular.module("ngFiltersMasksBr.factories"   , ["ngFiltersMasksBr.vendors"]);
angular.module("ngFiltersMasksBr.constants"   , ["ngFiltersMasksBr.vendors"]);
angular.module("ngFiltersMasksBr.services"    , ["ngFiltersMasksBr.vendors"]);
angular.module("ngFiltersMasksBr.directives"  , ["ngFiltersMasksBr.vendors"]);
angular.module("ngFiltersMasksBr.mocks"       , ["ngFiltersMasksBr.vendors"]);
angular.module("ngFiltersMasksBr.configs"     , ["ngFiltersMasksBr.vendors"]);
angular.module("ngFiltersMasksBr.providers"   , ["ngFiltersMasksBr.vendors"]);


// =============================================
// Scripts Module
// =============================================
angular.module("ngFiltersMasksBr.scripts", [
  "ngFiltersMasksBr.controllers",
  "ngFiltersMasksBr.constants",
  "ngFiltersMasksBr.filters",
  "ngFiltersMasksBr.factories",
  "ngFiltersMasksBr.services",
  "ngFiltersMasksBr.directives",
  "ngFiltersMasksBr.mocks",
  "ngFiltersMasksBr.providers",
  "ngFiltersMasksBr.configs"
]);


// =============================================
// Main Module
// =============================================
angular.module("ngFiltersMasksBr", [
  "ngFiltersMasksBr.scripts",
  "ngFiltersMasksBr.vendors"
]);


