import cloudy from '../imgs/cloudy.jpg';
import normal from '../imgs/normal.jpg';
import rain from '../imgs/rain.jpg';
import snow from '../imgs/snow.jpg';
import thunder from '../imgs/thunder.jpg';
import wind from '../imgs/wind.jpg';



const d = new Date();
let today = d.getDate();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export function displayInfo(data,unit){
    document.querySelector('.intro').style.visibility = "hidden";
    document.querySelector('.mainInfo').style.visibility = "visible";

    let todaysDate = document.querySelector('.todaysDate')
    let temp = document.querySelector('.temperature')
    let detail = document.querySelector('.detail')
    let minMax = document.querySelector('.minMax')
    let location = document.querySelector('.location')
    
    todaysDate.innerText = days[d.getDay()];
    location.innerText= data.name
    if(unit === 'imperial'){
        temp.innerText= data.main.temp + " F°"

    } else {
        temp.innerText= data.main.temp + " C°"

    }
    detail.innerText = data.weather[0].main
    minMax.innerHTML = '<p> lo: ' + data.main.temp_min + " <span>|</span> hi: " + data.main.temp_max

    displayDescription(data);
    displayAttributes(data);
    displayBackground(data);
}

export function displayDescription(data){
    let icon = data.weather[0].icon
    let description = document.querySelector('.desc');
    description.innerText = data.weather[0].description
    createIcon(icon);
}

function displayAttributes(data,unit){
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity');
let feels = document.querySelector('.feels')

wind.innerText = "Wind Speed: " + data.wind.speed
humidity.innerText = "Humidity: " + data.main.humidity;
feels.innerText = "Feels like: " + data.main.feels_like;
}

function displayBackground(data){
    let weather = data.weather[0].main
    switch(weather){
        case 'Clear':
        document.body.style.backgroundImage = `url(${normal});`
        console.log(weather)

        break;
        case 'Clouds':
        document.body.style.backgroundImage = `url(${cloudy});`
        console.log(weather)

        break;
        case 'Thunderstorm':
        document.body.style.backgroundImage = `url(${thunder});`
        console.log(weather)

        break;
        case 'Drizzle':
        document.body.style.backgroundImage = `url(${rain});`
        console.log(weather)

        break;
        case 'Rain':
        document.body.style.backgroundImage = `url(${rain});`
        console.log(weather)

        break;
        case 'Snow':
        document.body.style.backgroundImage = `url(${snow});`
        console.log(weather)

        break;
    }
}


function createIcon(icon){
    document.querySelector('.weatherIcon').remove();

    let img = document.createElement('img');
    img.src = `http://openweathermap.org/img/wn/${icon}@4x.png`
    img.className = "weatherIcon";
    document.querySelector('.description').append(img);
}