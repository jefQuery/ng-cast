angular.module('video-player')
.directive('app', function(youTube) {
  return {

    scope: {
    },
    templateUrl: 'src/templates/app.html',
    controller: function () {
      this.searchService = youTube;
      this.searchResults = (data) => {
        this.videos = data || window.exampleVideoData;
        this.currentVideo = this.videos[0];
      };
      this.selectVideo = (vid) => {
        this.currentVideo = vid;
      };
      console.log('app this', this);
      youTube.search('javascript tutorial', this.searchResults);
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