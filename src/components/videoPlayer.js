angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    // // TODO
    scope: {
      currentVideo: '<'
    },
    controller: function($scope) {
      console.log('video player', $scope);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
