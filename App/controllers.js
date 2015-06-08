//CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$location', 'forecastService', function ($scope, $location, forecastService) {
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
    
    $scope.submit = function(){
        $location.path("/forcast");
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