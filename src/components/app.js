angular.module('video-player')

// .controller('appController', function($scope, $window) {
//   this.videos = $window.exampleVideoData;
// })

.directive('app', function() {
  return {
    // handleOnClick: function() {
    //   this.currentVideo = video;
    // },

    // scope: {
    // },
    //   videos: '<'
    // },
    controller: function ($window) {
      var ctrl = this;
      ctrl.videos = $window.exampleVideoData;
      ctrl.currentVideo = this.videos[0];
      console.log("ctrl", ctrl);
      ctrl.onClickHandler = function(index) {
        console.log(index);
        ctrl.currentVideo = ctrl.videos[index]
      };
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };
});

// app.directive('someDirective', function () {
//   return {
//     scope: {
//       name: '='
//     },
//     controller: function () {
//       this.name = 'Pascal';
//     },
//     controllerAs: 'ctrl',
//     bindToController: true,
//     template: '<div>{{ctrl.name}}</div>'
//   };
// });