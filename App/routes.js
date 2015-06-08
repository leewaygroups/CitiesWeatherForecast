weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'Pages/home.html',
            controller: 'homeController'
        })
        .when('/home', {
            templateUrl: 'Pages/home.html',
            controller: 'homeController'
        })
        .when('/forcast', {
            templateUrl: 'Pages/forcast.html',
            controller: 'forecastController'
        });
//        .when('/forcast/:days', {
//            templateUrl: 'Pages/forcast.html',
//            controller: 'forecastController'
//        })
//        .when('/forcast/:days/:units', {
//            templateUrl: 'Pages/forcast.html',
//            controller: 'forecastController'
//        });

});