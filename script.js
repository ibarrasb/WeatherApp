var searchBtn = document.querySelector("#search-button");
var searchBar = document.querySelector("#search-bar");
var CitiesList = document.querySelector("#cities");
var newButton = document.querySelector("#cities");

//Creates Array for all cities that are inputted
var Namecities = [];

init();

//Creates a new button element once user searches for the city
function renderCities() {
     CitiesList.innerHTML = " ";

     //for loop to iterate through the list of cities
    for(var i =0; i< Namecities.length; i++){
        var Namecitie = Namecities[i];
        var li = document.createElement("button");
        li.textContent = Namecitie;
        li.setAttribute("id", "list-cities")
        li.setAttribute("class", "btn-cities")
        li.setAttribute("data-city", Namecitie)
        CitiesList.appendChild(li);
    }
}

function init(){
    var storedCities = JSON.parse(localStorage.getItem("Namecities"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedCities !== null) {
    Namecities = storedCities;
  }

  // Render todos to the DOM
  renderCities();
}
function storeCities(){
    localStorage.setItem("Namecities", JSON.stringify(Namecities));
}
//Calls function once button is clicked
searchBtn.addEventListener("click", function(event){
    event.preventDefault();

var results = searchBar.value.trim();

//doesnt append anything if search bar is empty
if(results === ""){
    alert("Enter a city")
    return;
}
//pushes the city into the array
Namecities.push(results);
//clears search bar for new input
searchBar.value = "";
storeCities();
renderCities();

getWeather(results);

})

newButton.addEventListener("click", function(event){

//returns clicked target value
var city = event.target.dataset.city


getWeather(city);

});

function getWeather(city){

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&cnt=100&appid=77cb75e1dce4e2e8df315c39afb955ef"
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
    
            //Returns AJAX reponse from selected city
            var results = response;
            console.log(results);
    
            var Weathercity = document.querySelector("#city-name-located");
            var forecastNow = document.querySelector("#forecast-now");
            var cityTem= document.querySelector("#city-temp");
            var cityHum = document.querySelector("#city-hum");
            var cityWind = document.querySelector("#city-wind");
            var time = document.querySelector("#today-time");
            var forecastNext = document.querySelector("#day");
            
            Weathercity.innerHTML = results.city.name;
            time.innerHTML = "Todays Weather: "+response.list[0].dt_txt;
            cityTem.innerHTML = "Temperature(F): " + (response.list[0].main.temp) + "°";
            cityHum.innerHTML = "Humidity: "+ response.list[0].main.humidity +"%";
            cityWind.innerHTML ="Wind Speed: " +response.list[0].wind.speed +"MPH";
            forecastNow.innerHTML = response.list[0].weather[0].description;
    
            //5 day forecast DATE
            var day1 = document.querySelector("#date-1");
            day1.innerHTML = response.list[5].dt_txt;
    
            var day2 = document.querySelector("#date-2")
            day2.innerHTML = response.list[13].dt_txt;
    
            var day3 = document.querySelector("#date-3")
            day3.innerHTML = response.list[21].dt_txt;
    
            var day4 = document.querySelector("#date-4")
            day4.innerHTML = response.list[29].dt_txt;
    
            var day5 = document.querySelector("#date-5")
            day5.innerHTML = response.list[37].dt_txt;
    
            //5 day forecast TEMP
            var day1temp = document.querySelector("#temp-1");
            day1temp.innerHTML ="Temp(f): " + response.list[5].main.temp + "°";
    
            var day2temp = document.querySelector("#temp-2");
            day2temp.innerHTML ="Temp(f): " + response.list[13].main.temp + "°";
    
            var day3temp = document.querySelector("#temp-3");
            day3temp.innerHTML ="Temp(f): " + response.list[21].main.temp + "°";
    
            var day4temp = document.querySelector("#temp-4");
            day4temp.innerHTML ="Temp(f): " + response.list[29].main.temp + "°";
    
            var day5temp = document.querySelector("#temp-5");
            day5temp.innerHTML ="Temp(f): " + response.list[37].main.temp + "°";
    
            //5 day forecast sky type
    
            var day1sky = document.querySelector("#type-1");
            day1sky.innerHTML = response.list[5].weather[0].description;
    
            var day2sky = document.querySelector("#type-2");
            day2sky.innerHTML = response.list[13].weather[0].description;
    
            var day3sky = document.querySelector("#type-3");
            day3sky.innerHTML = response.list[21].weather[0].description;
    
            var day4sky = document.querySelector("#type-4");
            day4sky.innerHTML = response.list[29].weather[0].description;
    
            var day5sky = document.querySelector("#type-5");
            day5sky.innerHTML = response.list[37].weather[0].description;
    
    
    
    
            
          
        });
}

