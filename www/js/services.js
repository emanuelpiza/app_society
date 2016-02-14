angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
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
