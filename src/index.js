import { getWeather } from "./modules/ApiHandler";
import {displayInfo} from "./modules/DomHandler"
import './style.css';
import './switch.css';
let button = document.querySelector('.butt')
let input = document.querySelector('.searchInput')
let unitToggle = document.querySelector('.unitSwitch')
let unit = "";





button.addEventListener('click', function(e){
    e.preventDefault();
    let weather = getWeather(input[0].value,unit)
    weather.then(function(data){
        displayInfo(data,unit)
    })


})


unitToggle.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        unit = 'imperial';
        } else {
        unit = 'metric';
    }
  })