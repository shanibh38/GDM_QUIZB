angular.module('citiesApp')
  .controller('finalController', ['$location', '$rootScope', '$scope','$http', function ($location, $rootScope, $scope,$http) {
    self = this;
    self = this;
    var serverUrl = 'https://boiling-meadow-96678.herokuapp.com/';

    function saveDetails() {
      data = {
        "bonus": "bonus",
        "userName": $rootScope.userName
      };

      $http.post(serverUrl + "Users/updateBonusB", data)
        .then(function (response) {
        }, function (response) {
        });

      }

      function checkIFGetBonus(){
        if ($rootScope.isBonus)
          saveDetails();
      }
      checkIFGetBonus();
  }]);