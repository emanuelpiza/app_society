angular.module('starter.services', [])

.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var players = [
    { id:0, name: 'Cleber', data: [[1, 1, 2, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:1, name: 'Ademar', data: [[1, 1, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:2, name: 'Xuxa', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:3, name: 'Igor', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:4, name: 'Jackson', data: [[1, 1, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:5, name: 'Escada', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:6, name: 'Negão', data: [[1, 2, 1, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:7, name: 'João', data: [[1, 1, 3, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:8, name: 'Gonçalo', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:9, name: 'Barba', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:10, name: 'Japonês', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:11, name: 'Ricardo', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:12, name: 'Mauro', data: [[1, 0, 2, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'mauro'									
  } , { id:13, name: 'Gil', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:14, name: 'Roberto', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:15, name: 'Caio', data: [[1, 3, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:16, name: 'Val', data: [[1, 3, 1, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:17, name: 'Xupin', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:18, name: 'Nei', data: [[1, 1, 1, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
  } , { id:19, name: 'Samuel', data: [[1, 1, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil'									
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
