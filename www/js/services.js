angular.module('starter.services', [])

.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var players = [
      { id:0, name: 'Cleber', dados: [[65, 59, 80, 81, 56, 55]], gols: '1', assistencias: '2', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:1, name: 'Ademar', dados: [[65, 59, 80, 81, 56, 55]],  gols: '1', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:2, name: 'Xuxa', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:3, name: 'Igor', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'
  } , { id:4, name: 'Jackson', dados: [[65, 59, 80, 81, 56, 55]],  gols: '1', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'
  } , { id:5, name: 'Escada', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:6, name: 'Negão', dados: [[65, 59, 80, 81, 56, 55]],  gols: '2', assistencias: '1', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:7, name: 'João', dados: [[65, 59, 80, 81, 56, 55]],  gols: '1', assistencias: '3', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:8, name: 'Gonçalo', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:9, name: 'Barba', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:10, name: 'Japonês', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:11, name: 'Ricardo', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:12, name: 'Mauro', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '2', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:13, name: 'Gil', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:14, name: 'Roberto', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:15, name: 'Caio', dados: [[65, 59, 80, 81, 56, 55]],  gols: '3', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:16, name: 'Val', dados: [[65, 59, 80, 81, 56, 55]],  gols: '3', assistencias: '1', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:17, name: 'Xupin', dados: [[65, 59, 80, 81, 56, 55]],  gols: '0', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:18, name: 'Nei', dados: [[65, 59, 80, 81, 56, 55]],  gols: '1', assistencias: '1', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'									
  } , { id:19, name: 'Samuel', dados: [[65, 59, 80, 81, 56, 55]],  gols: '1', assistencias: '0', vitoria: '1', defesa: '1', fairplay: '1', presenca: '6', equipe: 'Amigos de Quinta'
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
