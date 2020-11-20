/*const apiKey = "486da1b0a4cdd56e253216e446fe8aac"

const baseurl = "https://api.openweathermap.org/data/2.5/weather"

let cityId = "5604473"

let units = "imperial";


let requestUrl = baseurl + "?" +
    cityId +
    "&appid" + apiKey +
    "&units" + units;






console.log(requestUrl);
*/





const apikey = '486da1b0a4cdd56e253216e446fe8aac';
const baseURL = 'http://api.openweathermap.org/data/2.5/';
let cityid = '5605242';
let units = 'imperial';
// Get current weather data
let method = 'weather';
let apiURL = baseURL +
    method + '?' +
    'id=' + cityid +
    '&APPID=' + apikey +
    '&units=' + units;


    console.log(apiURL);

fetch(apiURL)
.then(response => response.json())
.then(data => {

    console.log(data);


    //gets the elements and displays them in the browser
    let temp = data.main.temp_max;
    document.getElementById('temper').innerText = temp;


    let chill = data.main.feels_like;
    document.getElementById('chilly').innerText = chill;

    let wind = data.wind.speed;
    document.getElementById('speed').innerText = wind;

    let des = data.weather[0].main;
    document.getElementById('descr').innerText = des;

    let humi = data.main.humidity;
    document.getElementById('hum').innerText = humi;

});

//five day foreccase
method = "forecast";

 apiURL = baseURL +
    method + '?' +
    'id=' + cityid +
    '&APPID=' + apikey +
    '&units=' + units;

    console.log(apiURL);
//keep track of DOW
    const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    fetch(apiURL)
   .then(response => response.json())
   .then(data => {
      console.log('Forecast data:');
      console.log(data);
      
      // Array of all the div's with the ".temp" class
      let forecast_temps = document.querySelectorAll('.forecast-day .temp');
      // Array of all the div's with the ".dow" class
      let forecast_dow = document.querySelectorAll('.forecast-day .dow');
      //array to get icon
      let forecast_icon = document.querySelectorAll('.forecast-day .icon');
      // Counter to keep track of which of the five days we are on
      let forecast_day_num = 0;
      // The "list" property in the forecast JSON string
      let list = data.list;
      // Loop through each item in the list of forecasts
      for (item of list) {
        
         // We only want the forecast for 18:00:00 each day
         if (item.dt_txt.includes('18:00:00')) {
            // Pull out the day of the week
            let date = new Date(item.dt * 1000);
            forecast_dow[forecast_day_num].innerHTML = DOW[date.getDay()];
            // Pull out temperature
            forecast_temps[forecast_day_num].innerHTML = item.main.temp + "&deg;F";
            

            let imagesrc = "https://openweathermap.org/img/w/" + item.weather[0].icon+ ".png"
            
            forecast_icon[forecast_day_num].setAttribute('src', imagesrc)
            forecast_day_num++;
         }
      }
   })