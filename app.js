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

//SERVICES
weatherApp.service('forecastService', function () {
    this.city = "Lagos NG";
    
    this.selectedDays = 3;
    this.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    this.selectedTemperatureUnit = "";
    this.units = [
        {
            name: "Fahrenheit",
            unit: "imperial"
        },
        {
            name: "Celsius",
            unit: "metric"
        }
    ];

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
    
    $scope.AllDays = forecastService.days;
    

    $scope.supportedLanguages = forecastService.Languages;
    $scope.temperatureUnits = forecastService.units;

    $scope.$watch('city', function () {
        forecastService.city = $scope.city;
    });

    $scope.languageChanged = function (newLanguage) {
        forecastService.selectedLanguage = newLanguage;
    }

    $scope.temperatureUnitChanged = function (newTempUnit) {
        forecastService.selectedTemperatureUnit = newTempUnit;
    }
    
    $scope.daysChanged = function(newDays){
        forecastService.selectedDays = newDays;
    }

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

    $scope.days = forecastService.selectedDays || 3 ; //$routeParams.days || 3;
    $scope.tempUnit = forecastService.selectedTemperatureUnit.unit; //$routeParams.units;
    $scope.language = forecastService.selectedLanguage.key;
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }

    console.log($scope.language);
    
    $scope.weatherForecastResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        units: $scope.tempUnit,
        lang: $scope.language
    });
    
    console.log($scope.weatherForecastResult);

}]);