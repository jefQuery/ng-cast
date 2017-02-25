angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    // TODO
    // controllerAs: 'ctrl',
    // bindToController: true,
    controller: function($scope) {
      console.log('this is in videoListEntry', $scope);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
