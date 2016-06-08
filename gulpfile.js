
var options = {
  modules: {
    unitTests: {
      webpackTestConfig: {
        module: {
          noParse: [
            /sinon/
          ]
        }
      }
    }
  }
};
require('basebuild-component')(options);