function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        })
    }
