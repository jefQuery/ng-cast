angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<',
      service: '<'
    },
    controller: function ($scope) {
      console.log(this);
      this.handleClick = () => {
        this.service.search(this.input, (data) => {
          this.result(data)
        })
      }
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
