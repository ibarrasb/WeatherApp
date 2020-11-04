var searchBtn = $("#search-button");
var searchBar = $("#search-bar");


searchBtn.on("click", function(){

    // console.log("worked")


var results = searchBar.val();

console.log(results);

searchBar.val('');
})

