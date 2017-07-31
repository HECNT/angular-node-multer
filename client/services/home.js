// var url = helpers.getUrl();

angular.module(MODULE_NAME)
.service('HomeService', ['$http', function($http) {
  var url = "http://localhost:3003";
  var urlBase = url + '/home';

  this.getTodo = function () {
    return $http.get(urlBase);
  };

  this.doSome = function (d) {
    return $http.post(urlBase + '/do-some', d)
  }

  this.doCierra = function () {
    return $http.get(urlBase + '/do-cierra')
  }

  this.getData = function () {
    return $http.get(urlBase + '/get-data')
  }

  this.uploadFileToUrl = function (file) {
    var fd = new FormData();
    fd.append('file', file);
    return $http.post(urlBase + '/upload-file', fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined}
           })
  }

  this.doDelete = function (d) {
    return $http.post(urlBase + '/do-delete', d)
  }

}]);
