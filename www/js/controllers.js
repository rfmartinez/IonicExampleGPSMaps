angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading) {

  function initialize() {
    var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    $scope.map = map;
  }
  google.maps.event.addDomListener(window, 'load', initialize);

$scope.centerOnMe = function() {
  if(!$scope.map) {
    return;
  }

  $scope.loading = $ionicLoading.show({
    content: 'Getting current location...',
    showBackdrop: false
  });

    var onSuccess = function(position) {
      $scope.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      $scope.loading.hide();
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
        $scope.loading.hide();
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
      }

      window.GPSLocation.getCurrentPosition(onSuccess, onError);

  };
  //google.maps.event.addDomListener(window, 'load', $scope.centerOnMe);
});
