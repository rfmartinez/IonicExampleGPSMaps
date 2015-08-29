angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading, $GeolocationGPS) {

  $scope.mapCreated = function(map) {
    $scope.map = map;
  };
  $scope.centerOnMe = function () {
    if (!$scope.map) {
      return;
    }
    var onSuccess = function(position) {
      $scope.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: $scope.map,
        title: 'Hello World!'
      });
      };
      // onError Callback receives a PositionError object
      //
      function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
      }

      window.GPSLocation.getCurrentPosition(onSuccess, onError);

  };
  google.maps.event.addDomListener(window, 'load', $scope.centerOnMe);
});
