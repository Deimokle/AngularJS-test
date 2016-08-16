angular.module('app', ['ngRoute', 'ui.materialize'])
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .config(routes);
