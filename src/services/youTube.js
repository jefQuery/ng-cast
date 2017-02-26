angular.module('video-player')
.service('youTube', function(callback) {
  // Simple GET request example:
  this.search = $http.get({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    params: {
      part: 'snippet',
      key: $window.YOUTUBE_API_KEY,
      q: query,
      maxResults: options.max || 5,
      type: 'video',
      videoEmbeddable: 'true'
    }
  }).then(function successCallback(response) {
    callback ? callback(response.items) : console.log('no callback');
  }, function errorCallback(response) {
    response.error.errors.forEach(function(err) {
      console.error(err.message);
    });
  });
});


//$http.get('/someUrl', config).then(successCallback, errorCallback);