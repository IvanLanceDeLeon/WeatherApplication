const API_KEY = '80ded2bbe3aa4eab608febda641544ad'

export async function getWeather(location, unit){
    try{
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&mode=json&appid=80ded2bbe3aa4eab608febda641544ad`, {mode: 'cors'});

    let weatherData = await weather.json();
  return weatherData;
    }
    catch(err){
      console.log(err)
    }
  }
  