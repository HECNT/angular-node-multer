require('../services/home');


angular.module(MODULE_NAME)
.controller('homeCtrl', ['$scope', 'HomeService', '$timeout', function($scope, HomeService, $timeout) {
  var ctrl = this;
  $scope.hola = "new life"

  $scope.show_login = false
  $scope.btnDoSome = function (item) {
    console.log(item);
    HomeService.doSome(item)
    .success(function(result){
      if (result == 1) {
        location.reload()
      } else {
        $scope.show_login = true
      }
    })
  }

  $scope.btnCierra = function () {
    HomeService.doCierra()
    .success(function(result){
      if (result == 1) {
        location.reload()
      } else {
        alert('Hubo un error btnCierra')
      }
    })
  }

}]);
