angular.module('starter.services', [])

.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var players = [
      { id:0, name: 'Cleber', gols: '1', assistencias: '2', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:1, name: 'Ademar', gols: '1', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:2, name: 'Xuxa', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:3, name: 'Igor', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'
  } , { id:4, name: 'Jackson', gols: '1', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'
  } , { id:5, name: 'Escada', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:6, name: 'Negão', gols: '2', assistencias: '1', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:7, name: 'João', gols: '1', assistencias: '3', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:8, name: 'Gonçalo', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:9, name: 'Barba', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:10, name: 'Japonês', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:11, name: 'Ricardo', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:12, name: 'Mauro', gols: '0', assistencias: '2', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:13, name: 'Gil', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:14, name: 'Roberto', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:15, name: 'Caio', gols: '3', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:16, name: 'Val', gols: '3', assistencias: '1', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:17, name: 'Xupin', gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:18, name: 'Nei', gols: '1', assistencias: '1', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:19, name: 'Samuel', gols: '1', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'
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
