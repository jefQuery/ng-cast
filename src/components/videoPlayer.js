angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    // // TODO
    // scope: {
    //   currentVideo: '='
    // },
    controller: function($scope) {
      console.log($scope)
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
