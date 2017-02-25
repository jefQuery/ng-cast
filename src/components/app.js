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
      this.videos = $window.exampleVideoData;
      this.currentVideo = this.videos[1];
      console.log(this.videos);
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