angular.module('starter.services', [])

.factory('Players', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var players = [
    { id:1, name: 'Ademar', data: [[1, 1, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['Vídeo 1','','',''], videos_links:['https://youtu.be/NIxmUvblW1E?t=30m12s','','','']									
} , { id:9, name: 'Barba', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:15, name: 'Caio', data: [[1, 3, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['Vídeo 1','Vídeo 2','Vídeo 3',''], videos_links:['https://youtu.be/NIxmUvblW1E?t=21m15s','https://youtu.be/NIxmUvblW1E?t=38m12s','https://youtu.be/NIxmUvblW1E?t=44m8s','']									
} , { id:5, name: 'Escada', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:13, name: 'Gil', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:8, name: 'Goncalo', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:3, name: 'Igor', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:4, name: 'Jackson', data: [[1, 1, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['Vídeo 1','Vídeo 2','',''], videos_links:['https://youtu.be/NIxmUvblW1E?t=30m12s','https://youtu.be/NIxmUvblW1E?t=47m32s','','']									
} , { id:10, name: 'Japones', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:7, name: 'João', data: [[1, 1, 3, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['Vídeo 1','Vídeo 2','Vídeo 3','Vídeo 4'], videos_links:['https://youtu.be/NIxmUvblW1E?t=9m3s','https://youtu.be/NIxmUvblW1E?t=11m3s','https://youtu.be/NIxmUvblW1E?t=47m32s','https://youtu.be/NIxmUvblW1E?t=62m0s']									
} , { id:0, name: 'Kleber', data: [[1, 1, 2, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'kleber', videos_nomes:['Vídeo 1','Vídeo 2','Vídeo 3',''], videos_links:['https://youtu.be/NIxmUvblW1E?t=21m15s','https://youtu.be/NIxmUvblW1E?t=31m12s','https://youtu.be/NIxmUvblW1E?t=38m12s','']									
} , { id:12, name: 'Mauro', data: [[1, 0, 2, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'mauro', videos_nomes:['Vídeo 1','Vídeo 2','',''], videos_links:['https://youtu.be/NIxmUvblW1E?t=44m8s','https://youtu.be/NIxmUvblW1E?t=56m38s','','']									
} , { id:6, name: 'Negao', data: [[1, 2, 1, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['Vídeo 1','Vídeo 2','Vídeo 3',''], videos_links:['https://youtu.be/NIxmUvblW1E?t=9m3s','https://youtu.be/NIxmUvblW1E?t=11m3s','https://youtu.be/NIxmUvblW1E?t=63m17s','']									
} , { id:18, name: 'Nei', data: [[1, 1, 1, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['Vídeo 1','Vídeo 2','',''], videos_links:['https://youtu.be/NIxmUvblW1E?t=55m38s','https://youtu.be/NIxmUvblW1E?t=62m0s','','']									
} , { id:11, name: 'Ricardo', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:14, name: 'Roberto', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:19, name: 'Samuel', data: [[1, 1, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['Vídeo 1','','',''], videos_links:['https://youtu.be/NIxmUvblW1E?t=13m46s','','','']									
} , { id:16, name: 'Val', data: [[1, 3, 1, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['Vídeo 1','Vídeo 2','Vídeo 3','Vídeo 4'], videos_links:['https://youtu.be/NIxmUvblW1E?t=13m46s','https://youtu.be/NIxmUvblW1E?t=16m12s','https://youtu.be/NIxmUvblW1E?t=56m38s','https://youtu.be/NIxmUvblW1E?t=63m17s']									
} , { id:17, name: 'Xupin', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']									
} , { id:2, name: 'Xuxa', data: [[1, 0, 0, 1, 1, 3]], equipe: 'Amigos de Quinta', foto: 'perfil', videos_nomes:['','','',''], videos_links:['','','','']								
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
    nome: 'Amigos de Quinta',
    foto: 'img/amigos.jpg',
    fundacao: '2011',
    campo: 'Paradiso Futebol Society',
    site: 'http://andrecruz.com.br/paradisolocalizacao.html',
    horario: 'Quintas, 19h00 às 20h00.',
    partidas: '5',
    jogadores: '20',
    urlvideos: 'https://www.youtube.com/embed/videoseries?list=PLXOWQP5Jx-Mh1dLQ5ksrPUFdP04YsNLTL'
 },{
    id: 1,
    nome: 'Peladeiros de Sexta',
    foto: 'img/turma.jpeg',
    fundacao: 'Setembro de 1995',
    campo: 'Paradiso Futebol Society',
    site: 'http://andrecruz.com.br/paradisolocalizacao.html',
    horario: 'Sextas, 20h30 às 22h00.',
    partidas: '25',
    jogadores: '24',
    urlvideos: 'https://www.youtube.com/embed/videoseries?list=PLXOWQP5Jx-MiuvP_Ms3HBJEqWLlhNdKsp'
  },{
    id: 2,
    nome: 'Poka Yoke',
    foto: 'img/pokayoke.jpg',
    fundacao: 'Julho de 1998',
    campo: 'Clube Jardim Aurélia',
    site: 'http://clubeaurelia.com.br/',
    horario: 'Sextas, 17h30 às 19h00.',
    partidas: '0',
    jogadores: '22',
    urlvideos: ''
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
