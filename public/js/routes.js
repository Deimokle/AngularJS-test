function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'mainController'
        })
        .when('/combat', {
            templateUrl: 'views/combat.html',
            controller: 'combatController'
        })
        .otherwise({
            redirectTo: '/'
        })
    }
