//CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$location', 'forecastParamService', function ($scope, $location, forecastParamService) {
    $scope.city = forecastParamService.city;
    
    $scope.AllDays = forecastParamService.days;
    

    $scope.supportedLanguages = forecastParamService.Languages;
    $scope.temperatureUnits = forecastParamService.units;

    $scope.$watch('city', function () {
        forecastParamService.city = $scope.city;
    });

    $scope.languageChanged = function (newLanguage) {
        forecastParamService.selectedLanguage = newLanguage;
    }

    $scope.temperatureUnitChanged = function (newTempUnit) {
        forecastParamService.selectedTemperatureUnit = newTempUnit;
    }
    
    $scope.daysChanged = function(newDays){
        forecastParamService.selectedDays = newDays;
    }
    
    $scope.submit = function(){
        $location.path("/forcast");
    }

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'forecastParamService', 'forecastDataService', function ($scope, $resource, $routeParams, forecastParamService, forecastDataService) {
    $scope.city = forecastParamService.city;

    $scope.days = forecastParamService.selectedDays || 3 ; 
    $scope.tempUnit = forecastParamService.selectedTemperatureUnit.unit; 
    $scope.language = forecastParamService.selectedLanguage.key;
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }

    console.log($scope.language);
    
    $scope.weatherForecastResult =  forecastDataService.GetWeatherData($scope.city, $scope.days, $scope.tempUnit, $scope.language);

}]);