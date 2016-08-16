angular.module('app', ['ngRoute', 'ui.materialize'])
        .service('todoService', todoService)
        .service('combatService', combatService)
        .controller('mainController', mainController)
        .controller('combatController', combatController)
        .config(routes);
