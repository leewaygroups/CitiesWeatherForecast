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