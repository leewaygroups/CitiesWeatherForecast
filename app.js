//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


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
        })
        .when('/forcast/:days/:units', {
            templateUrl: 'Pages/forcast.html',
            controller: 'forecastController'
        });

});

//SERVICES
weatherApp.service('forecastService', function () {
    this.city = "Lagos NG";
    this.selectedLanguage = "";
    this.Languages = [
        {
            name: "English",
            key: "en"
        },
        {
            name: "Russian",
            key: "ru"
        },
        {
            name: "Italian",
            key: "it"
        },
        {
            name: "Spanish",
            key: "es"
        },
        {
            name: "Ukrainian",
            key: "uk"
        },
        {
            name: "German",
            key: "de"
        },
        {
            name: "Portuguese",
            key: "pt"
        },
        {
            name: "Romanian",
            key: "ro"
        },
        {
            name: "Polish",
            key: "pl"
        },
        {
            name: "Finnish",
            key: "fi"
        },
        {
            name: "Dutch",
            key: "nl"
        },
        {
            name: "French",
            key: "fr"
        },
        {
            name: "Bulgarian",
            key: "bg"
        },
        {
            name: "Swedish",
            key: "sv"
        },
        {
            name: "ChineseTraditional",
            key: "zh_tw"
        },
        {
            name: "ChineseSimplified",
            key: "zh"
        },
        {
            name: "Turkish",
            key: "tr"
        },
        {
            name: "Croatian",
            key: "hr"
        },
        {
            name: "Catalan",
            key: "ca"
        }
    ];
});

//CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'forecastService', function ($scope, forecastService) {
    $scope.city = forecastService.city;
    
    $scope.supportedLanguages = forecastService.Languages;
    $scope.selectedLanguage = forecastService.Languages[0];
    
    $scope.$watch('selectedLanguage', function(){
        forecastService.selectedLanguage = $scope.selectedLanguage;
    });
    

    $scope.$watch('city', function () {
        forecastService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'forecastService', function ($scope, $resource, $routeParams, forecastService) {
    $scope.city = forecastService.city;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK"
    }, {
        get: {
            method: "JSONP"
        }
    });
    
    $scope.days = $routeParams.days || 3;
    $scope.tempUnit = $routeParams.units || "metric";
   

    $scope.weatherForecastResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        units: $scope.tempUnit
    });
    

    console.log(forecastService.selectedLanguage);
    //console.log($scope.weatherForecastResult);

}]);