Preparação do ambiente: http://daniel.favand.net/2014/11/21/developing-ionic-cordova-apps-in-the-cloud-with-cloud9/

Além disso, estamos usando o IonicMaterialDesign como base.


<h1>TECNOLOGIAS ENVOLVIDAS:</h1>

Apache Cordova: Servidor adaptado para apps.

Ionic: Plataforma front-end para teste do aplicativo em diferentes cenários.

AngularJS: JavaScript específico para apss, que programa o comportamento de HTML e CSS, estáticos por natureza.

<h1>Estrutura básica</h1>

O index.html carrega Ionic e o Cordova como premissas. Em seguida, chama no arquivo "/js/app.js" o módulo "starter" do AngularJS. 

O módulo starter vem acompanhado de alguns requerimentos. No caso exemplo, controllers e services.

Sua função é, basicamente, concentrar os possíveis estados(páginas) que o app pode ter. Controllers são objetos que contém
informações carregadas durante a abertura do app, para um determinado escopo. Em services, ficam funções, por exemplo acesso
a dados que são alimentados em cada estado. 


Para os gráficos:
https://blog.nraboy.com/2015/08/using-charts-in-your-ionic-framework-mobile-app/


http://ionicframework.com/docs/api/directive/ionNavView/

