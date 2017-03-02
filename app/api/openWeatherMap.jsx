var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=3ecdeea64d54162d8e200a4713366d88';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function (res) {
            debugger;
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function (err) {
            //throw new Error(res.data.message);
            throw new Error('Unable to fetch weather for that location.');
        });
    }
}