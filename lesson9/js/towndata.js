const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
var townArray = [];
function Town(rainfall,
    population, events,
    motto, name,
    photo, founded
){
this.averageRainfall = rainfall;
this.population = population
this.events = events; this.motto = motto;
this.name = name; this.photo = photo;
this.founded = founded;
return this;
}

function buildTownStructure(containerClass, townObject){
let townSection = document.createElement('div');
container = document.querySelector(containerClass);
townSection.classList.add('townBanner');
container.appendChild(townSection);
queryCity = `${containerClass} > div:last-of-type`;
let city = document.querySelector(queryCity);
let cityImage = document.createElement('img');
cityImage.src = `images/${townObject.photo}`
cityImage.alt = `photo of ${townObject.name}`
city.appendChild(cityImage);
let cityInfo = document.createElement('div');
city.appendChild(cityInfo);
let cityName = document.createElement('h3');
cityName.textContent = townObject.name;
cityInfo.appendChild(cityName);

let cityMotto = document.createElement('h4');
cityMotto.textContent = townObject.motto;
cityInfo.appendChild(cityMotto);
let cityFounded = document.createElement('p');
cityFounded.textContent = `Year founded: ${townObject.name}`;
cityInfo.appendChild(cityFounded);
let cityPopulation = document.createElement('p');
cityPopulation.textContent = `Population: ${townObject.population}`;
cityInfo.appendChild(cityPopulation);
let cityRainfall = document.createElement('p');
cityRainfall.textContent = `Annual rainfall: ${townObject.averageRainfall}"`;
cityInfo.appendChild(cityRainfall);    
}
