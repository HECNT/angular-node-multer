require('../services/home');


angular.module(MODULE_NAME)
.controller('homeCtrl', ['$scope', 'HomeService', '$timeout', function($scope, HomeService, $timeout) {
  var ctrl = this;
  $scope.hola = "new life"

  HomeService.getData()
  .success(function(result){
    $scope.files = result
    console.log($scope.files);
  })

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

  $scope.show_dialog = false
  $scope.uploadFile = function(){
    var file = $scope.myFile;
    console.log(file);
    $scope.show_dialog = true
    HomeService.uploadFileToUrl(file)
    setTimeout(function () {
      location.reload()
    }, 5000);
  };

  $scope.btnEliminar = function (d) {
    console.log(d);
    HomeService.doDelete(d)
    .success(function(result){
      location.reload()
    })
  }

}]);

    angular.module(MODULE_NAME)
    .directive('fileModel', ['$parse', function ($parse) {
        return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              var model = $parse(attrs.fileModel);
              var modelSetter = model.assign;
              element.bind('change', function(){
                 scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                 });
              });
           }
        };
     }]);
