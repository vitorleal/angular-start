Start AngularJS App
==================

```
├── FrontEnd-com-AnguarJS.pdf
├── README.md
├── assets
│   ├── css
│   │   └── main.css
│   ├── img
│   ├── js
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── controllers.js
│   │   └── libs
│   │       ├── angular-mocks.js
│   │       └── angular.min.js
│   └── views
│       └── mainView.html
├── index.html
├── karma.conf.js
├── package.json
└── test
    └── controllers
        └── MainCtrl_Spec.js
```

##Estrutura

- **index.html**: Nosso html principal, onde inserimos os scripts e css necessários

- **assets/css**: está o arquivo princial de estilos do app.

- **assets/js/app.js**: está a criação do módulo principal ("***myApp***") e configuração de rótas

- **assets/js/controllers/controllers.js**: está definido o nosso controller principal ("**MainCtrl**"). Também é onde você pode criar os outros controllers do seu app

- **assets/js/libs/**: Está o framework do angular e também está "angular-mocks.js" para criar mocks da aplicação para os testes

- **assets/views/**: Está o template principal do app ("**mainView.html**"). També é onde você pode criar seus outros templates

- **karma.conf.js**: Estão as configuração para rodar os testes da aplicação utilizando [Karma](http://karma-runner.github.io/)

- **package.json**: Estão declaradas as dependências para executar os testes do app

- **test/**: estão criados os tests em [Jasmine](http://pivotal.github.io/jasmine/). Lembrando que devem terminar em **Spec.js**

##Testes
Para rodas os testes primerio você tem que instalar as dependências. *(tem que ter nodeJS instalado na maquina)*

```
npm install
```

Depois das dependências instaladas execute os testes:

```
npm test
```











