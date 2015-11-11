let HomeController = function($scope, SC, $http, $sce) {

  let url ='http://api.soundcloud.com/tracks?client_id=' + SC;


  $scope.search = (query) => {

    query = encodeURI(query);

    // How SoundCloud wants the url. See SC docu
    $http.get(url + '&q=' + query).then( (res) => {

      // Send date to page
      $scope.songs = res.data;

    });
  };

  // Play song when click on pic
  $scope.playMe = (song) => {

    // From SC API
    $scope.audio = $sce.trustAsResourceUrl(song.stream_url + '?client_id=' + SC);
    $scope.playing = song;
  };

};

HomeController.$inject =['$scope', 'SC', '$http', '$sce'];
export default HomeController;