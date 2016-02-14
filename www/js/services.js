angular.module('starter.services', [])

.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var players = [{
    id: 0,
    name: 'Marquinhos',
    lastText: 'Atacante',
    face: 'img/marquinhos.png'
  },{
    id: 1,
    name: 'Marquinhos',
    lastText: 'Zagueiro',
    face: 'img/marquinhos.png'
  }
  ];

  return {
    all: function() {
      return players;
    },
    remove: function(player) {
      players.splice(players.indexOf(player), 1);
    },
    get: function(playerId) {
      for (var i = 0; i < players.length; i++) {
        if (players[i].id === parseInt(playerId)) {
          return players[i];
        }
      }
      return null;
    }
  };
})

.factory('Teams', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var teams = [{
    id: 0,
    nome: 'Peladeiros de Sexta',
    foto: 'img/turma.jpeg',
    fundacao: 'Setembro de 1995',
    campo: 'http://andrecruz.com.br/paradisolocalizacao.html',
    horario: 'Sextas, 20h30 às 22h00.',
    partidas: '25',
    url_videos: 'https://www.youtube.com/embed/videoseries?list=PLXOWQP5Jx-MiuvP_Ms3HBJEqWLlhNdKsp'
  }, {
    id: 1,
    nome: 'Amigos de Quinta',
    foto: 'img/turma.jpeg',
    fundacao: '2011',
    campo: 'http://andrecruz.com.br/paradisolocalizacao.html',
    horario: 'Quintas, 19h00 às 20h00.',
    partidas: '4',
    url_videos: ''
 }];

  return {
    all: function() {
      return teams;
    },
    remove: function(team) {
      teams.splice(teams.indexOf(team), 1);
    },
    get: function(teamId) {
      for (var i = 0; i < teams.length; i++) {
        if (teams[i].id === parseInt(teamId)) {
          return teams[i];
        }
      }
      return null;
    }
  };
});
