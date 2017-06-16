Simple AngularJS App
==================
To run the app:

```
python -m SimpleHTTPServer
```

Go to the url [http://localhost:8000](http://localhost:8000)


## Presentation
- [WebApps with AngularJS](http://vitorleal.github.io/angularjs-talk/)

- [SpeakerDeck](https://speakerdeck.com/vitorleal/webapps-with-angularjs)

- The PDF in this repo **"./WebApps with AngularJS.pdf"**



## Structure

```
├── WebApps com AngularJS.pdf
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

***

- **index.html**: Ower main html, where we insert all the scripts and css

- **assets/css**: The main css file.

- **assets/js/app.js**: Ower main module is defined here ("***myApp***") and the route configuration

- **assets/js/controllers/controllers.js**: The main controller is here ("**MainCtrl**"). Also you can create other controllers for your app

- **assets/js/libs/**: Here ypu can find the angularJS framework and also the "angular-mocks.js" so you can mock your controllers in the test specks

- **assets/views/**: Ower main template ("**mainView.html**"). You can create other templates here 

- **karma.conf.js**: All the configs to run the tests speck using [Karma](http://karma-runner.github.io/)

- **package.json**: You can find the dependencies to run the tests

- **test/**: The test usign Jasmin as test framework [Jasmine](https://jasmine.github.io/). The name of the test filest should end with **Spec.js**


## Tests
To run the tests you should have [nodeJS](http://nodejs.org/) installed. *(tem que ter nodeJS instalado na maquina)*

```
npm install
```

After that you can run the tests:

```
npm test
```
