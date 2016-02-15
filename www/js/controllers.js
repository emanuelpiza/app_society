angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Teams) {
  $scope.teams = Teams.all();
  $scope.remove = function(team) {
    Teams.remove(team);
  };
})

//.controller('TeamCtrl', function($scope) {})
.controller('TeamCtrl', function($scope, $stateParams, Teams) {
  $scope.team = Teams.get($stateParams.teamId);
})


.controller('PlayersCtrl', function($scope, Players) {
  //Atribuindo seus próprios parâmetros pra utilização
  $scope.players = Players.all();
  $scope.remove = function(player) {
  Players.remove(player);
  };
})

.controller('PlayerDetailCtrl', function($scope, $stateParams, Players) {
  $scope.player = Players.get($stateParams.playerId);
  $scope.labels = ["Vitórias", "Gols", "Assistência", "Defesa", "FairPlay", "Presença"];
  $scope.series = ['Dados de 12/02/2016'];
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
