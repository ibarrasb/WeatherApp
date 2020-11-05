var searchBtn = document.querySelector("#search-button");
var searchBar = document.querySelector("#search-bar");
var CitiesList = document.querySelector("#cities");
var newButton = document.querySelector("#cities");

//Creates Array for all cities that are inputted
var Namecities = [];

//calls cities function
renderCities();




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

//Calls function once button is clicked
searchBtn.addEventListener("click", function(event){
    event.preventDefault();

var results = searchBar.value.trim();

//doesnt append anything if search bar is empty
if(results === ""){
    return;
}
//pushes the city into the array
Namecities.push(results);
//clears search bar for new input
searchBar.value = "";

renderCities();
})

newButton.addEventListener("click", function(event){

//returns clicked target value
 var city = event.target.dataset.city

console.log(city);


var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=77cb75e1dce4e2e8df315c39afb955ef";



$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {

        var results = response;
        console.log(results);


    });



});



    








