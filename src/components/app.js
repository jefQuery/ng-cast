angular.module('video-player')

.controller('appController', function($scope, $window) {
  $scope.videos = $window.exampleVideoData;
})

.directive('app', function() {
  return {
    // scope: {
    //   allVideos: '<'
    // },
    // //write the directive code that will render this component to the DOM
    // controllerAs: 'ctrl',
    // bindToController: true,
    controller: function ($scope) {
      console.log('this is in app.js', $scope);
    },
    templateUrl: 'src/templates/app.html'
  };
});
