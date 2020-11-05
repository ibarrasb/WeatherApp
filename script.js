var searchBtn = document.getElementById("search-button");
var searchBar = document.getElementById("search-bar");
var CitiesList = document.getElementById("cities");

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
        li.setAttribute("id", "list-cities-"+i)
        li.setAttribute("class", "btn-cities")
        li.setAttribute("data-city", Namecitie)
        CitiesList.appendChild(li);
    }

    for (let i=0; i<Namecities.length; i++) {
        (function (i) {
            let btn = document.getElementById("list-cities-"+i);
            btn.addEventListener('click', function() { 
                let city = btn.firstChild.data;
                console.log(city);


                var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=77cb75e1dce4e2e8df315c39afb955ef";

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function(response) {
                    let results = response;
                    console.log(results);
                });
            });
        })(i);
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
});





    








