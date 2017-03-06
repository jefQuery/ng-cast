angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    
    scope: {
      video: '<'
    },
    controller: function($scope) {
      console.log('video player', $scope);
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
