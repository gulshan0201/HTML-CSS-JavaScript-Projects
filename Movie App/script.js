const APIURL = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
/** By using the async method the data which is stored within the api get stored inside the variable named respData
 * which means that the data gets converted into json formate
 */

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const search_result = document.getElementById('search_result');
const total_records = document.getElementById('total_records');

getMovies(APIURL)

async function getMovies(url){
  const response = await fetch(url);
  const respData = await response.json();

  console.log(respData)

  showMovies(respData.results)  // in this line we are getting the (.results) from the api and calling the function showMovies line no 18 and storing the movies data in (respData) variable
}

function showMovies(movies){
main.innerHTML = '';
  // console.log(movies) this log statement will show the listed movies from the api 
  movies.forEach((movie, index) => {

    // console.log(index) //this log statement will get all the starting index of the array in case we log the movie it wil display all the movies in the given array. 
    const movieM1 = document.createElement('div');
    movieM1.classList.add('movie')

    if(movie.poster_path != null){
      poster_path = IMGPATH+ movie.poster_path;
    }else {
      poster_path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfRNfL4WGOJmFo2FgJIBDke_lS8eYnl4mDh0q9QmlHqeImRjIU7Xi8PBoPvUI1vWRjRw&usqp=CAU";
    }
    movieM1.innerHTML = '<img src='+poster_path+' alt=""> <div class = "movie-info"><h3> '+movie.title+' </h3><span class = '+getClassByRate(movie.vote_average)+'> '+movie.vote_average+' </span></div>';

    main.appendChild(movieM1) // append child  helps in adding the div element using DOM to the HTML file 
    
  })
}

function getClassByRate(vote){
  // console.log(vote);

  if(vote >= 8){
    return "green";
  } else if(vote >= 5){
    return "orange";
  }else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const searchTerm = search.value;
  // console.log(searchTerm) this log statement will show what is the word which user has searched and displays it in the console

  if(searchTerm){
    getMovies(SEARCHAPI+searchTerm)
    search.value = searchTerm;
    search_result.innerHTML = "Search result for " +searchTerm 
  }else{
    getMovies(APIURL)
  }

})