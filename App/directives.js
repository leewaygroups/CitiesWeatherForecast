//DIRECTIVES

weatherApp.directive("weatherReport", function(){
    return{
        templateUrl: 'Directives/weatherReport.html',
        replace: true,
        scope: {
            dayWeather: "=",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});