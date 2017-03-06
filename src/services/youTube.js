angular.module('video-player')

.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then(function successCallback({data}) {
      callback ? callback(data.items) : console.log('no callback');
    }).catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
})


//$http.get('/someUrl', config).then(successCallback, errorCallback);