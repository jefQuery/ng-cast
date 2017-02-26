angular.module('video-player')
.directive('videoListEntry', function() {

  return {

    scope: {
      video: '<',
      selectVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('scope is in videoListEntry', $scope);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
