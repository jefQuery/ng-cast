angular.module('video-player')

// .controller('appController', function($scope, $window) {
//   this.videos = $window.exampleVideoData;
// })

.directive('app', function() {
  return {
    // handleOnClick: function() {
    //   this.currentVideo = video;
    // },

    scope: {
    },
    //   videos: '<'
    // },
    templateUrl: 'src/templates/app.html',
    controller: function () {
      this.getData = function(data) {
        this.videos = data;
      };
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = (video) => {
        console.log(video);
        this.currentVideo = video;
      };
      this.onClick = () => {

      };
      console.log('app this', this);
    },
    controllerAs: 'ctrl',
    bindToController: true
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