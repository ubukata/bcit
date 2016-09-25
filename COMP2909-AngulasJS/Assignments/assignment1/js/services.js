weatherApp.factory("weatherService", function ($http) {
    'use strict';
								  
    function convertToCelsius(value){
		return parseInt((parseFloat(value)-32) * 5/9);
	}
	
    return {
        getWeather: function ($scope, scale) {
			scale = scale || 'F';
			var data = [{"code":"11","date":"27 Sep 2016","day":"Fri","high":"53","low":"45","text":"Showers","cityCode":"CAXX0518","cityName":"Vancouver"}, 
                 {"code":"29","date":"27 Sep 2016","day":"Fri","high":"76","low":"61","text":"Partly Cloudy","cityCode":"CUXX0003","cityName":"Havana Cuba"}, 
                 {"code":"31","date":"27 Sep 2016","day":"Fri","high":"77","low":"56","text":"Clear","cityCode":"USCA0982","cityName":"San Diego"}, 
                 {"code":"30","date":"27 Sep 2016","day":"Fri","high":"82","low":"70","text":"Partly Cloudy","cityCode":"USHI0026","cityName":"Honolulu"} ];
				 
			if(scale === 'C') {
				for(let i = 0; i < data.length; i++){
					data[i].high =  convertToCelsius(data[i].high);
					data[i].low = convertToCelsius(data[i].low);
				}
			}
			
			$scope.forecast = data;	 
				 
        },
    }
});
