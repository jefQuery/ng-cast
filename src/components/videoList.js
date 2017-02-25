angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '<'
    },
    // controllerAs: 'ctrl',
    // bindToController: true,
    controller: function($scope) {
      // $scope.videos = window.exampleVideoData;
      console.log('this is in videoList', $scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
