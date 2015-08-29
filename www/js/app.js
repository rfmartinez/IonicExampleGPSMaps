angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'native.plugins.geolocation'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
